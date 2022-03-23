<?php

namespace App\Http\Controllers\Post\Image;

use App\Http\Requests\Image\StoreRequest;
use Illuminate\Support\Facades\Storage;

class StoreController extends BaseController
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        $url = $this->service->store($data);
        return response()->json(['url' => $url]);
    }
}
