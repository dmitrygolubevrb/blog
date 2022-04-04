<?php

namespace App\Listeners;

use App\Events\PostHasViewed\PostHasViewed;

class PostViewsCounter
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\PostHasViewed\PostHasViewed  $event
     * @return void
     */
    public function handle(PostHasViewed $event)
    {
        $event->post->increment('view_count');
    }
}
