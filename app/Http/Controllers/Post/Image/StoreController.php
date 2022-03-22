<?php

namespace App\Http\Controllers\Post\Image;

use App\Http\Requests\Image\StoreRequest;
use Intervention\Image\Facades\Image;

class StoreController extends BaseController
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        $image = $data['image'];
        $name = $image->getClientOriginalName();
        $ext = $image->getClientOriginalExtension();
        Image::make($data['image'])->resize(1640,859)->save(storage_path('app/public/images/img'  .'.'. $ext));

    }
}
