<?php

namespace IAWPSCOPED\Illuminate\Contracts\Queue;

/** @internal */
interface QueueableCollection
{
    /**
     * Get the type of the entities being queued.
     *
     * @return string|null
     */
    public function getQueueableClass();
    /**
     * Get the identifiers for all of the entities.
     *
     * @return array
     */
    public function getQueueableIds();
    /**
     * Get the relationships of the entities being queued.
     *
     * @return array
     */
    public function getQueueableRelations();
    /**
     * Get the connection of the entities being queued.
     *
     * @return string|null
     */
    public function getQueueableConnection();
}
