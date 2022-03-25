<?php


namespace App\Http\Services\Post;


use App\Models\Post;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class Service
{

    public function store($data)
    {
        $mainImage = $data['main_image'];
        unset($data['main_image']);
        $previewImage = Image::make($mainImage)->fit(100, 100);
        $data['preview_image'] = Storage::disk('public')->putFile('images', $mainImage);

        dd($mainImagePath);
    }

    public function update($data, $post)
    {
    }

}
