<?php

/**
 * WP Async Request
 */
namespace IAWP\Utils;

/**
 * Abstract WP_Async_Request class.
 *
 * @abstract
 * @internal
 */
abstract class WP_Async_Request
{
    /**
     * Prefix
     *
     * (default value: 'wp')
     *
     * @var string
     */
    protected $prefix = 'wp';
    /**
     * Action
     *
     * (default value: 'async_request')
     *
     * @var string
     */
    protected $action = 'async_request';
    /**
     * Identifier
     *
     * @var mixed
     */
    protected $identifier;
    /**
     * Data
     *
     * (default value: array())
     *
     * @var array
     */
    protected $data = [];
    /**
     * Initiate new async request
     */
    public function __construct()
    {
        $this->identifier = $this->prefix . '_' . $this->action;
        \add_action('wp_ajax_' . $this->identifier, [$this, 'maybe_handle']);
        \add_action('wp_ajax_nopriv_' . $this->identifier, [$this, 'maybe_handle']);
    }
    /**
     * Handle
     *
     * Override this method to perform any actions required
     * during the async request.
     */
    protected abstract function handle(array $data);
    /**
     * Set data used during the request
     *
     * @param array $data Data.
     *
     * @return $this
     */
    public function data($data)
    {
        $this->data = $data;
        return $this;
    }
    /**
     * Dispatch the async request
     *
     * @return bool
     */
    public function dispatch() : bool
    {
        $optionDisableAsyncRequest = \get_option('iawp_disable_async_request', \false) === '1';
        $constantDisableAsyncRequest = \defined('IAWP_DISABLE_ASYNC_REQUEST') && \IAWP_DISABLE_ASYNC_REQUEST === \true;
        if ($optionDisableAsyncRequest || $constantDisableAsyncRequest) {
            $this->handle($this->data);
            return \true;
        }
        $url = \add_query_arg($this->get_query_args(), $this->get_query_url());
        $args = $this->get_post_args();
        $response = \wp_remote_post(\esc_url_raw($url), $args);
        return !\is_wp_error($response);
    }
    /**
     * Maybe handle
     *
     * Check for correct nonce and pass to handler.
     */
    public function maybe_handle()
    {
        // Don't lock up other requests while processing
        \session_write_close();
        \check_ajax_referer($this->identifier, 'nonce');
        $this->handle($_POST);
        \wp_die();
    }
    /**
     * Get query args
     *
     * @return array
     */
    protected function get_query_args()
    {
        if (\property_exists($this, 'query_args')) {
            return $this->query_args;
        }
        $args = ['action' => $this->identifier, 'nonce' => \wp_create_nonce($this->identifier)];
        /*
         * Filters the post arguments used during an async request.
         *
         * @param array $url
         */
        return \apply_filters($this->identifier . '_query_args', $args);
    }
    /**
     * Get query URL
     *
     * @return string
     */
    protected function get_query_url()
    {
        if (\property_exists($this, 'query_url')) {
            return $this->query_url;
        }
        $url = \admin_url('admin-ajax.php');
        /*
         * Filters the post arguments used during an async request.
         *
         * @param string $url
         */
        return \apply_filters($this->identifier . '_query_url', $url);
    }
    /**
     * Get post args
     *
     * @return array
     */
    protected function get_post_args()
    {
        if (\property_exists($this, 'post_args')) {
            return $this->post_args;
        }
        $args = ['timeout' => 0.01, 'blocking' => \false, 'body' => $this->data, 'cookies' => $_COOKIE, 'sslverify' => \apply_filters('https_local_ssl_verify', \false)];
        /*
         * Filters the post arguments used during an async request.
         *
         * @param array $args
         */
        return \apply_filters($this->identifier . '_post_args', $args);
    }
}
