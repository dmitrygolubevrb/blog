<?php

namespace App\Http\Controllers\Admin\Tag;

use App\Http\Requests\Admin\Tag\StoreRequest;
use App\Http\Resources\Tag\TagResource;

class StoreController extends BaseController
{

    /**
     * @param StoreRequest $request
     */
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        $result = $this->service->store($data);
        return new TagResource($result);
    }
}
