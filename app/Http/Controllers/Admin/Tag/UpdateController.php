<?php

namespace App\Http\Controllers\Admin\Tag;

use App\Http\Requests\Admin\Tag\UpdateRequest;
use App\Models\Tag;

class UpdateController extends BaseController
{
    /**
     * @param UpdateRequest $request
     * @param Tag $tag
     */
    public function __invoke(UpdateRequest $request, Tag $tag)
    {
        $data = $request->validated();
        return $this->service->update($data, $tag);
    }
}
