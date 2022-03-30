<?php

namespace App\Http\Controllers\Post;

use App\Models\Category;

class IndexController extends BaseController
{
    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function __invoke()
    {
//        $posts = Category::with(['posts' => function($query){
//            $query->limit(10);
//        }])->get();
//        return ;
    }
}
