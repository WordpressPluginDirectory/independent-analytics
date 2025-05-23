<?php

namespace IAWP\Tables;

use IAWP\Campaign_Builder;
use IAWP\Dashboard_Options;
use IAWP\Date_Picker\Date_Picker;
use IAWP\Filters;
use IAWP\Form_Submissions\Form;
use IAWP\Icon_Directory_Factory;
use IAWP\Plugin_Group;
use IAWP\Rows\Filter;
use IAWP\Sort_Configuration;
use IAWP\Statistics\Statistics;
use IAWP\Tables\Columns\Column;
use IAWP\Tables\Groups\Group;
use IAWP\Tables\Groups\Groups;
use IAWP\Utils\CSV;
use IAWP\Utils\Currency;
use IAWP\Utils\Number_Formatter;
use IAWP\Utils\Security;
use IAWP\Utils\Timezone;
use IAWP\Utils\URL;
use IAWP\Utils\WordPress_Site_Date_Format_Pattern;
use IAWPSCOPED\Illuminate\Support\Str;
/** @internal */
abstract class Table
{
    protected $default_sorting_column = 'visitors';
    private $filters;
    private $visible_columns;
    private $group;
    private $is_new_group;
    /** @var ?Statistics */
    private $statistics;
    /**
     * @param string|null $group_id
     * @param bool $is_new_group
     */
    public function __construct(?string $group_id = null, bool $is_new_group = \false)
    {
        $this->visible_columns = Dashboard_Options::getInstance()->visible_columns();
        $this->group = $this->groups()->find_by_id($group_id);
        $this->is_new_group = $is_new_group;
        $this->filters = new Filters();
    }
    protected abstract function groups() : Groups;
    /**
     * @return array<Column>
     */
    protected abstract function local_columns() : array;
    protected abstract function table_name() : string;
    /**
     * @return string[]
     */
    public function visible_column_ids() : array
    {
        $visible_columns = [];
        foreach ($this->get_columns() as $column) {
            if ($column->is_visible()) {
                $visible_columns[] = $column->id();
            }
        }
        return $visible_columns;
    }
    public function group() : Group
    {
        return $this->group;
    }
    public function column_picker_html() : string
    {
        return \IAWPSCOPED\iawp_blade()->run('plugin-group-options', ['option_type' => 'columns', 'option_name' => \__('Toggle Columns', 'independent-analytics'), 'option_icon' => 'columns', 'plugin_groups' => Plugin_Group::get_plugin_groups(), 'options' => $this->get_columns(\true)]);
    }
    public function get_table_toolbar_markup()
    {
        return \IAWPSCOPED\iawp_blade()->run('tables.table-toolbar', ['plugin_groups' => Plugin_Group::get_plugin_groups(), 'columns' => $this->get_columns(\true), 'groups' => $this->groups(), 'current_group' => $this->group()]);
    }
    public function get_table_markup(string $sort_column, string $sort_direction)
    {
        return \IAWPSCOPED\iawp_blade()->run('tables.table', ['table' => $this, 'table_name' => $this->table_name(), 'all_columns' => $this->get_columns(), 'visible_column_count' => $this->visible_column_count(), 'number_of_shown_rows' => 0, 'rows' => [], 'render_skeleton' => \true, 'page_size' => \IAWPSCOPED\iawp()->pagination_page_size(), 'sort_column' => $sort_column, 'sort_direction' => $sort_direction, 'has_campaigns' => Campaign_Builder::has_campaigns()]);
    }
    public function set_statistics(Statistics $statistics)
    {
        $this->statistics = $statistics;
    }
    public function get_row_data_attributes($row)
    {
        $html = '';
        foreach ($this->get_columns() as $column) {
            $id = $column->id();
            $data_val = $row->{$id}();
            $html .= ' data-' . \esc_attr($column->id()) . '="' . \esc_attr($data_val) . '"';
        }
        return $html;
    }
    public function get_cell_content($row, Column $column)
    {
        $column_id = $column->id();
        if (\is_null($row->{$column_id}())) {
            return '-';
        }
        if ($column_id == 'title' && $row->is_deleted()) {
            return Security::string($row->{$column_id}()) . ' <span class="deleted-label">' . \esc_html__('(deleted)', 'independent-analytics') . '</span>';
        } elseif ($column_id == 'views') {
            $views = Number_Formatter::decimal($row->views());
            // Getting a divide by zero error from the line below?
            // It's likely an issue with $this->views which is an instance of Views. Make sure the queries there are working.
            $views_percentage = Number_Formatter::percent($row->views() / $this->statistics->get_statistic('views')->value() * 100, 2);
            return '<span class="no-wrap">' . Security::string($views) . '</span> <span class="percentage">(' . Security::string($views_percentage) . ')</span>';
        } elseif ($column_id == 'visitors') {
            $visitors = Number_Formatter::decimal($row->visitors());
            $visitors_percentage = Number_Formatter::percent($row->visitors() / $this->statistics->get_statistic('visitors')->value() * 100, 2);
            return '<span class="no-wrap">' . Security::string($visitors) . '</span> <span class="percentage">(' . Security::string($visitors_percentage) . ')</span>';
        } elseif ($column_id == 'sessions') {
            $sessions = Number_Formatter::decimal($row->sessions());
            $sessions_percentage = Number_Formatter::percent($row->sessions() / $this->statistics->get_statistic('sessions')->value() * 100, 2);
            return '<span class="no-wrap">' . Security::string($sessions) . '</span> <span class="percentage">(' . Security::string($sessions_percentage) . ')</span>';
        } elseif ($column_id === 'entrances') {
            $entrances = Number_Formatter::decimal($row->entrances());
            $entrances_percentage = Number_Formatter::percent($row->entrances() / $this->statistics->get_statistic('sessions')->value() * 100, 2);
            return '<span class="no-wrap">' . Security::string($entrances) . '</span> <span class="percentage">(' . Security::string($entrances_percentage) . ')</span>';
        } elseif ($column_id === 'exits') {
            $exits = Number_Formatter::decimal($row->exits());
            $exits_percentage = Number_Formatter::percent($row->exits() / $this->statistics->get_statistic('sessions')->value() * 100, 2);
            return '<span class="no-wrap">' . Security::string($exits) . '</span> <span class="percentage">(' . Security::string($exits_percentage) . ')</span>';
        } elseif ($column_id === 'bounce_rate') {
            return Security::string(Number_Formatter::percent($row->bounce_rate()));
        } elseif ($column_id === 'average_session_duration' || $column_id === 'average_view_duration') {
            return Number_Formatter::second_to_minute_timestamp($row->{$column_id}());
        } elseif ($column_id === 'views_growth' || $column_id === 'visitors_growth' || $column_id === 'wc_conversion_rate' || $column_id === 'exit_percent' || Str::startsWith($column_id, 'form_conversion_rate')) {
            return Number_Formatter::percent($row->{$column_id}(), 2);
        } elseif ($column_id == 'url') {
            if ($row->is_deleted()) {
                return \urldecode(\esc_url($row->url()));
            } else {
                return '<a href="' . \esc_url($row->url(\true)) . '" target="_blank" class="external-link">' . \urldecode(\esc_url($row->url())) . '<span class="dashicons dashicons-external"></span></a>';
            }
        } elseif ($column_id == 'author') {
            return Security::html($row->avatar()) . ' ' . Security::string($row->author());
        } elseif ($column_id == 'date') {
            return Security::string(\date(WordPress_Site_Date_Format_Pattern::for_php(), \strtotime($row->date())));
        } elseif ($column_id == 'type' && \method_exists($row, 'icon') && \method_exists($row, 'type')) {
            return $row->icon(0) . ' ' . Security::string($row->type());
        } elseif ($column_id == 'referrer' && $row->has_link()) {
            return '<a href="' . \esc_url($row->referrer_url()) . '" target="_blank" class="external-link">' . Security::string($row->referrer()) . '<span class="dashicons dashicons-external"></span></a>';
        } elseif ($column_id === 'device_type') {
            return Icon_Directory_Factory::device_types()->find($row->device_type()) . Security::string($row->device_type());
        } elseif ($column_id === 'browser') {
            return Icon_Directory_Factory::browsers()->find($row->browser()) . Security::string($row->browser());
        } elseif ($column_id === 'os') {
            return Icon_Directory_Factory::operating_systems()->find($row->os()) . Security::string($row->os());
        } elseif ($column_id === 'country') {
            return Icon_Directory_Factory::flags()->find($row->country_code()) . Security::string($row->country());
        } elseif ($column_id === 'wc_gross_sales' || $column_id === 'wc_refunded_amount' || $column_id === 'wc_net_sales' || $column_id === 'wc_average_order_volume') {
            return Security::string(Currency::format($row->{$column_id}()));
        } elseif ($column_id === 'wc_earnings_per_visitor') {
            return Security::string(Currency::format($row->{$column_id}(), \false));
        } elseif ($column_id === 'views_per_session') {
            return Number_Formatter::decimal($row->{$column_id}(), 2);
        } elseif ($column_id === 'link_target') {
            $value = $row->{$column_id}();
            if (\is_string($value) && URL::new($value)->is_valid_url()) {
                return '<a href="' . Security::string($value) . '" target="_blank" class="external-link">' . Security::string($value) . '<span class="dashicons dashicons-external"></span></a>';
            }
            return $value;
        } else {
            return Security::string($row->{$column_id}());
        }
    }
    public function output_report_toolbar()
    {
        $options = Dashboard_Options::getInstance();
        $start = $options->get_date_range()->start()->setTimezone(Timezone::site_timezone());
        $end = $options->get_date_range()->end()->setTimezone(Timezone::site_timezone());
        ?>
        <div id="toolbar" class="toolbar" data-filter-count="<?php 
        echo \count($options->filters());
        ?>">
        <div class="date-picker-parent">
            <div class="modal-parent dates">
                <button id="dates-button"
                        data-testid="open-calendar"
                        class="iawp-button"
                        data-action="dates#toggleModal"
                        data-dates-target="modalButton"
                >
                    <span class="dashicons dashicons-calendar-alt"></span>
                    <span class="iawp-label"><?php 
        echo \esc_html($options->get_date_range()->label());
        ?></span>
                </button>
                <div id="modal-dates"
                     class="iawp-modal large dates"
                     data-dates-target="modal"
                >
                    <?php 
        echo (new Date_Picker($start, $end, $options->relative_range_id()))->calendar_html();
        ?>
                </div>
            </div>
        </div>
        <div class="filter-parent">
            <?php 
        echo $this->filters()->get_filters_html($this->get_columns());
        ?>
        </div>
        <div class="download-options-parent" data-controller="modal">
            <div class="modal-parent downloads">
                <button id="download-options" data-modal-target="modalButton" data-action="click->modal#toggleModal" class="download-options">
                    <?php 
        \esc_html_e('Download Report', 'independent-analytics');
        ?>
                </button>
                <div class="iawp-modal small downloads" data-modal-target="modal">
                    <div class="modal-inner">
                        <div class="title-small">
                            <?php 
        \esc_html_e('Choose a format', 'independent-analytics');
        ?>
                            <span data-report-target="spinner" class="dashicons dashicons-update iawp-spin hidden"></span>
                        </div>
                        <div class="download-button-container">
                            <button id="download-csv" class="iawp-button" data-report-target="exportReportTable" data-action="report#exportReportTable">
                                <span class="dashicons dashicons-media-spreadsheet"></span>
                                <span class="iawp-label">
                                    <?php 
        \esc_html_e('Download Table CSV', 'independent-analytics');
        ?>
                                </span>
                            </button>
                            <button id="download-report-statistics-csv" class="iawp-button" data-report-target="exportReportStatistics" data-action="report#exportReportStatistics">
                                <span class="dashicons dashicons-media-spreadsheet"></span>
                                <span class="iawp-label">
                                    <?php 
        \esc_html_e('Download Daily Metrics CSV', 'independent-analytics');
        ?>
                                </span>
                            </button>
                        </div>
                        <div class="download-button-container">
                            <button id="download-pdf" class="iawp-button" data-report-target="exportPDF" data-action="report#exportPDF" disabled="disabled">
                                <span class="dashicons dashicons-pdf"></span>
                                <span class="iawp-label">
                                    <?php 
        \esc_html_e('Download PDF', 'independent-analytics');
        ?>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div><?php 
    }
    public function filters_template_html() : string
    {
        return $this->filters()->get_condition_html($this->get_columns());
    }
    public function filters_condition_buttons_html(array $filters) : string
    {
        return $this->filters()->condition_buttons_html($filters);
    }
    public final function csv(array $rows, bool $is_dashboard_export = \false) : CSV
    {
        $columns = $this->get_columns();
        $csv_header = [];
        $csv_rows = [];
        foreach ($columns as $column) {
            if (!$this->include_column_in_csv($column, $is_dashboard_export)) {
                continue;
            }
            $csv_header[] = $column->name();
        }
        foreach ($rows as $row) {
            $csv_row = [];
            foreach ($columns as $column) {
                if (!$this->include_column_in_csv($column, $is_dashboard_export)) {
                    continue;
                }
                $column_id = $column->id();
                $value = $row->{$column_id}();
                if (\is_string($value)) {
                    $value = \html_entity_decode($value);
                    // Fix apostrophes for Excel
                    $value = \str_replace("’", "'", $value);
                }
                $csv_row[] = $this->formatted_csv_cell_content($column, $value);
            }
            $csv_rows[] = $csv_row;
        }
        $csv = new CSV($csv_header, $csv_rows);
        return $csv;
    }
    public function formatted_csv_cell_content(Column $column, $value) : string
    {
        $column_id = $column->id();
        // Todo - This logic is similar to the rendering logic for table cells. This should
        //  all be handled via the column class itself.
        if (\is_null($value)) {
            return '-';
        } elseif (\in_array($column_id, ['views', 'visitors', 'sessions', 'clicks', 'form_submissions']) || Str::startsWith($column_id, 'form_submissions_for_')) {
            return Number_Formatter::integer($value);
        } elseif (\in_array($column_id, ['bounce_route', 'views_growth', 'visitors_growth', 'form_conversion_rate']) || Str::startsWith($column_id, 'form_conversion_rate_for_')) {
            return Number_Formatter::percent($value);
        } elseif ($column_id === 'date') {
            return \date(WordPress_Site_Date_Format_Pattern::for_php(), \strtotime($value));
        } elseif ($column_id === 'average_session_duration' || $column_id === 'average_view_duration') {
            return Number_Formatter::second_to_minute_timestamp($value);
        } elseif ($column_id === 'views_per_session') {
            return Number_Formatter::decimal($value, 2);
        } elseif ($column_id === 'wc_gross_sales' || $column_id === 'wc_refunded_amount' || $column_id === 'wc_net_sales' || $column_id === 'wc_average_order_volume') {
            return Currency::format($value);
        } elseif ($column_id === 'wc_earnings_per_visitor') {
            return Currency::format($value);
        } else {
            return $value;
        }
    }
    /**
     * @param array[] $filters Raw filter associative arrays
     *
     * @return Filter[]
     */
    public function sanitize_filters(array $filters) : array
    {
        return \array_values(\array_filter(\array_map(function ($filter) {
            return $this->sanitize_filter($filter);
        }, $filters)));
    }
    public function sanitize_filter(array $filter) : ?Filter
    {
        $column = $this->get_column($filter['column']);
        if (\is_null($column)) {
            return null;
        }
        $valid_inclusions = ['include', 'exclude'];
        if (!\in_array($filter['inclusion'], $valid_inclusions)) {
            return null;
        }
        if (!$column->is_valid_filter_operator($filter['operator'])) {
            return null;
        }
        if (!$column->is_enabled_for_group($this->group())) {
            return null;
        }
        $operand = \trim(Security::string($filter['operand']));
        if (\strlen($operand) === 0) {
            return null;
        }
        if ($column->database_column() === 'cached_url' && $filter['operator'] === 'exact') {
            $url = new URL($filter['operand']);
            if (!$url->is_valid_url()) {
                $filter['operand'] = \site_url($filter['operand']);
            }
        }
        // Link rules can be archived and then deleted by the user. That means that there's a very
        // reasonable chance that a report is filtering by an id for a rule that's since been
        // removed. We need to check and make sure that filters link rules still exist.
        if ($column->id() === 'link_name') {
            $match = \false;
            foreach ($column->options() as $option) {
                if ((int) $option[0] === (int) $filter['operand']) {
                    $match = \true;
                }
            }
            if (!$match) {
                return null;
            }
        }
        return new Filter(['inclusion' => Security::string($filter['inclusion']), 'column' => $column->id(), 'operator' => Security::string($filter['operator']), 'operand' => Security::string($filter['operand']), 'database_column' => $column->database_column()]);
    }
    public function get_column(string $id) : ?Column
    {
        $matches = \array_filter($this->local_columns(), function (Column $column) use($id) {
            return $column->id() === $id;
        });
        $column = \count($matches) === 1 ? \reset($matches) : null;
        if (\is_null($column) || !$column->is_enabled()) {
            return null;
        }
        return $column;
    }
    public function sanitize_sort_parameters(?string $sort_column = null, ?string $sort_direction = 'desc') : Sort_Configuration
    {
        if (\is_null($sort_column)) {
            return new Sort_Configuration($this->default_sorting_column);
        }
        $column = $this->get_column($sort_column);
        if (\is_null($column) || !$column->is_enabled_for_group($this->group)) {
            return new Sort_Configuration($this->default_sorting_column);
        }
        return new Sort_Configuration($sort_column, $sort_direction, $column->is_nullable());
    }
    public function get_rendered_template(array $rows, bool $just_rows, string $sort_column, string $sort_direction)
    {
        if ($just_rows) {
            return \IAWPSCOPED\iawp_blade()->run('tables.rows', ['table' => $this, 'table_name' => $this->table_name(), 'all_columns' => $this->get_columns(), 'visible_column_count' => $this->visible_column_count(), 'number_of_shown_rows' => \count($rows), 'rows' => $rows, 'render_skeleton' => \false, 'page_size' => \IAWPSCOPED\iawp()->pagination_page_size(), 'sort_column' => $sort_column, 'sort_direction' => $sort_direction, 'has_campaigns' => Campaign_Builder::has_campaigns()]);
        }
        return \IAWPSCOPED\iawp_blade()->run('tables.table', ['table' => $this, 'table_name' => $this->table_name(), 'all_columns' => $this->get_columns(), 'visible_column_count' => $this->visible_column_count(), 'number_of_shown_rows' => \count($rows), 'rows' => $rows, 'render_skeleton' => \false, 'page_size' => \IAWPSCOPED\iawp()->pagination_page_size(), 'sort_column' => $sort_column, 'sort_direction' => $sort_direction, 'has_campaigns' => Campaign_Builder::has_campaigns()]);
    }
    /**
     * @return Column[]
     */
    public function get_columns($show_disabled_columns = \false) : array
    {
        $columns_for_group = \array_filter($this->local_columns(), function (Column $column) {
            return $column->is_enabled() && $column->is_enabled_for_group($this->group) && $column->is_subgroup_plugin_enabled();
        });
        if (\false === $show_disabled_columns) {
            $columns_for_group = \array_filter($columns_for_group, function (Column $column) {
                return $column->is_group_plugin_enabled();
            });
        }
        if (\is_null($this->visible_columns) || \count($this->visible_columns) === 0) {
            return $columns_for_group;
        }
        if (!$this->is_new_group) {
            return \array_map(function ($column) {
                $column->set_visibility(\in_array($column->id(), $this->visible_columns));
                return $column;
            }, $columns_for_group);
        }
        return \array_map(function ($column) {
            if ($column->is_group_dependent()) {
                $column->set_visibility(\true);
            } elseif (!\in_array($column->id(), $this->visible_columns)) {
                $column->set_visibility(\false);
            }
            return $column;
        }, $columns_for_group);
    }
    protected function get_woocommerce_columns() : array
    {
        return [new Column(['id' => 'wc_orders', 'name' => \__('Orders', 'independent-analytics'), 'plugin_group' => 'ecommerce', 'type' => 'int', 'aggregatable' => \true]), new Column(['id' => 'wc_gross_sales', 'name' => \__('Gross Sales', 'independent-analytics'), 'plugin_group' => 'ecommerce', 'type' => 'int', 'aggregatable' => \true]), new Column(['id' => 'wc_refunds', 'name' => \__('Refunds', 'independent-analytics'), 'plugin_group' => 'ecommerce', 'type' => 'int', 'aggregatable' => \true]), new Column(['id' => 'wc_refunded_amount', 'name' => \__('Refunded Amount', 'independent-analytics'), 'plugin_group' => 'ecommerce', 'type' => 'int', 'aggregatable' => \true]), new Column(['id' => 'wc_net_sales', 'name' => \__('Total Sales', 'independent-analytics'), 'plugin_group' => 'ecommerce', 'type' => 'int', 'aggregatable' => \true]), new Column(['id' => 'wc_conversion_rate', 'name' => \__('Conversion Rate', 'independent-analytics'), 'plugin_group' => 'ecommerce', 'type' => 'int']), new Column(['id' => 'wc_earnings_per_visitor', 'name' => \__('Earnings Per Visitor', 'independent-analytics'), 'plugin_group' => 'ecommerce', 'type' => 'int']), new Column(['id' => 'wc_average_order_volume', 'name' => \__('Average Order Volume', 'independent-analytics'), 'plugin_group' => 'ecommerce', 'type' => 'int'])];
    }
    protected function get_form_columns() : array
    {
        $columns = [new Column(['id' => 'form_submissions', 'name' => \__('Submissions', 'independent-analytics'), 'plugin_group' => 'forms', 'type' => 'int', 'aggregatable' => \true]), new Column(['id' => 'form_conversion_rate', 'name' => \__('Conversion Rate', 'independent-analytics'), 'plugin_group' => 'forms', 'type' => 'int'])];
        foreach (Form::get_forms() as $form) {
            $columns[] = new Column(['id' => $form->submissions_column(), 'name' => $form->title() . ' ' . \__('Submissions', 'independent-analytics'), 'plugin_group' => 'forms', 'is_subgroup_plugin_active' => $form->is_plugin_active(), 'plugin_group_header' => $form->plugin_name(), 'type' => 'int', 'aggregatable' => \true]);
            $columns[] = new Column(['id' => $form->conversion_rate_column(), 'name' => $form->title() . ' ' . \__('Conversion Rate', 'independent-analytics'), 'plugin_group' => 'forms', 'is_subgroup_plugin_active' => $form->is_plugin_active(), 'plugin_group_header' => $form->plugin_name(), 'type' => 'int']);
        }
        return $columns;
    }
    private function include_column_in_csv(Column $column, bool $is_dashboard_export) : bool
    {
        if (!$column->is_visible() && $is_dashboard_export) {
            return \false;
        }
        if (!$column->exportable() && !$is_dashboard_export) {
            return \false;
        }
        if (!$column->is_group_plugin_enabled()) {
            return \false;
        }
        return \true;
    }
    /**
     * Get the number of visible columns
     *
     * @return int
     */
    private function visible_column_count() : int
    {
        $visible_columns = 0;
        foreach ($this->get_columns() as $column) {
            if ($column->is_visible()) {
                $visible_columns++;
            }
        }
        return $visible_columns;
    }
    private function filters()
    {
        return $this->filters;
    }
}
