<?php

namespace App\Http\Controllers\Admin\Tag;

use App\Models\Tag;

class DestroyController extends BaseController
{
    /**
     * @param Tag $tag
     */
    public function __invoke(Tag $tag)
    {
        $tag->delete();
        return response([]);
    }
}
