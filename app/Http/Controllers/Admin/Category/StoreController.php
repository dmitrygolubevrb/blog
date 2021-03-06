<?php

namespace App\Http\Controllers\Admin\Category;

use App\Http\Requests\Admin\Category\StoreRequest;
use App\Http\Resources\Category\CategoryResource;

class StoreController extends BaseController
{


    /**
     * @param StoreRequest $request
     * Handle the incoming request.
     */
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        $result = $this->service->store($data);
        return new CategoryResource($result);
    }
}
