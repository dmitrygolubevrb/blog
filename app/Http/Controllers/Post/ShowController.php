<?php

namespace App\Http\Controllers\Post;

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
        return new PostResource($post);
    }
}