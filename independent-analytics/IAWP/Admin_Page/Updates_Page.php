<?php

namespace IAWP\Admin_Page;

use IAWP\Capability_Manager;
/** @internal */
class Updates_Page extends \IAWP\Admin_Page\Admin_Page
{
    protected function render_page()
    {
        if (Capability_Manager::show_branded_ui()) {
            echo \IAWPSCOPED\iawp_blade()->run('updates');
            $this->update_latest_update_viewed();
        } else {
            echo '<p class="permission-blocked">' . \esc_html__('You do not have permission to view this page.', 'independent-analytics') . '</p>';
        }
    }
    private function update_latest_update_viewed()
    {
        \update_option('iawp_last_update_viewed', \IAWP_VERSION, \true);
    }
}
