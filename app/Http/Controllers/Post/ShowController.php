<?php

namespace App\Http\Controllers\Post;

use App\Events\PostHasViewed\PostHasViewed;
use App\Http\Resources\Post\PostResource;
use App\Models\Post;

class ShowController extends BaseController
{
    /**
     * @param Post $post
     * @return PostResource
     */
    public function __invoke(Post $post)
    {
        PostHasViewed::dispatch($post);
        return new PostResource($post);
    }
}
