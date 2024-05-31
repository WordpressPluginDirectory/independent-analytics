<?php

namespace IAWP\Models;

use IAWP\Geoposition;
use IAWP\Illuminate_Builder;
use IAWP\Query;
use IAWP\Utils\Request;
use IAWP\Utils\Salt;
/**
 * How to use:
 *
 * Example IP from the Netherlands
 * $visitor = new Visitor('92.111.145.208', 'some ua string');
 *
 * Example IP from the United States
 * $visitor = new Visitor('98.111.145.208', 'some ua string');
 *
 * Access visitor token
 * $visitor->id();
 * @internal
 */
class Visitor
{
    private $id;
    private $geoposition;
    private $current_session;
    /**
     * New instances should be created with a string ip address
     *
     * @param string $ip
     * @param string $user_agent
     */
    public function __construct(string $ip, string $user_agent)
    {
        $this->id = $this->fetch_visitor_id($this->calculate_hash($ip, $user_agent));
        $this->geoposition = new Geoposition($ip);
        $this->current_session = $this->fetch_current_session();
    }
    public function geoposition() : Geoposition
    {
        return $this->geoposition;
    }
    public function has_recorded_session() : bool
    {
        return \is_object($this->current_session);
    }
    public function most_recent_session_id() : ?int
    {
        if ($this->has_recorded_session() && \is_int($this->current_session->session_id)) {
            return $this->current_session->session_id;
        } else {
            return null;
        }
    }
    public function most_recent_initial_view_id() : ?int
    {
        if ($this->has_recorded_session() && \is_int($this->current_session->initial_view_id)) {
            return $this->current_session->initial_view_id;
        } else {
            return null;
        }
    }
    public function most_recent_view_id() : ?int
    {
        if (!$this->has_recorded_session()) {
            return null;
        }
        if (\is_int($this->current_session->final_view_id)) {
            return $this->current_session->final_view_id;
        }
        return $this->current_session->initial_view_id;
    }
    /**
     * Return the database id for a visitor
     *
     * @return string
     */
    public function id() : string
    {
        return $this->id;
    }
    /**
     * @param string $ip
     * @param string $user_agent
     * @return string
     */
    private function calculate_hash(string $ip, string $user_agent) : string
    {
        $salt = Salt::visitor_token_salt();
        $result = $salt . $ip . $user_agent;
        return \md5($result);
    }
    private function fetch_visitor_id(string $hash) : int
    {
        $visitors_table = Query::get_table_name(Query::VISITORS);
        Illuminate_Builder::get_builder()->from($visitors_table)->insertOrIgnore([['hash' => $hash]]);
        return Illuminate_Builder::get_builder()->from($visitors_table)->where('hash', '=', $hash)->value('visitor_id');
    }
    private function fetch_current_session()
    {
        $sessions_table = Query::get_table_name(Query::SESSIONS);
        return Illuminate_Builder::get_builder()->from($sessions_table)->where('visitor_id', '=', $this->id)->whereRaw('created_at > DATE_SUB(UTC_TIMESTAMP(), INTERVAL 30 MINUTE)')->orderBy('created_at', 'desc')->first();
    }
    public static function fetch_current_visitor() : self
    {
        return new \IAWP\Models\Visitor(Request::ip(), Request::user_agent());
    }
}
