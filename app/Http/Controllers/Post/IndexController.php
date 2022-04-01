<?php

namespace App\Http\Controllers\Post;

use App\Http\Resources\Post\PostResource;
use App\Models\Category;

class IndexController extends BaseController
{
    public function __invoke()
    {
        return $this->service->index();
    }
}
