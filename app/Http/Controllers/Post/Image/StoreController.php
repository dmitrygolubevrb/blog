<?php

namespace App\Http\Controllers\Post\Image;

use App\Http\Controllers\Controller;
use App\Http\Requests\Image\StoreRequest;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        dd($data);
    }
}
