<?php

namespace IAWP\Utils;

use DateTimeZone;
/** @internal */
class Timezone
{
    public static function utc_timezone() : DateTimeZone
    {
        return new DateTimeZone('UTC');
    }
    public static function utc_offset() : string
    {
        return '+00:00';
    }
    public static function utc_offset_in_hours() : float
    {
        return 0;
    }
    public static function utc_offset_in_seconds() : int
    {
        return 0;
    }
    public static function site_timezone() : DateTimeZone
    {
        $timezone_string = \get_option('timezone_string');
        if ($timezone_string) {
            return new DateTimeZone($timezone_string);
        } else {
            return new DateTimeZone(self::site_offset());
        }
    }
    // Will return an offset using the WordPress timezone set by the user
    // Example return values: -04:00, +00:00, or +5:45
    public static function site_offset() : string
    {
        // Start with the offset such as -4, 0, or 5.75
        $offset_in_hours = (float) \get_option('gmt_offset');
        // Build a string to represent the offset such as -04:00, +00:00, or +5:45
        $result = '';
        // Start with either - or +
        $result .= $offset_in_hours < 0 ? '-' : '+';
        $whole_part = \abs($offset_in_hours);
        $hour_part = \floor($whole_part);
        $minute_part = $whole_part - $hour_part;
        $hours = \strval($hour_part);
        $minutes = \strval($minute_part * 60);
        // Add hour part to result
        $result .= \str_pad($hours, 2, '0', \STR_PAD_LEFT);
        // Add separator
        $result .= ':';
        // Add minute part to result
        $result .= \str_pad($minutes, 2, '0', \STR_PAD_LEFT);
        return $result;
    }
    public static function site_offset_in_hours() : float
    {
        return (float) \get_option('gmt_offset');
    }
    /**
     * @param \DateTime $date The offset depends on what time of year the datetime is for
     *
     * @return int Offset in seconds
     */
    public static function site_offset_in_seconds(\DateTime $date) : int
    {
        $timezone = self::site_timezone();
        $offset_in_seconds = $timezone->getOffset($date);
        return $offset_in_seconds;
    }
}
