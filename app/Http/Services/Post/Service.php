<?php


namespace App\Http\Services\Post;


use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image as InterventionImage;


class Service
{

    public function store($data)
    {
        $mainImage = $data['main_image'];
        unset($data['main_image']);
//            $post = Post::create($data);
//        $name = md5(Carbon::now() . '-' . $mainImage->getClientOriginalName()) . '.' . $mainImage->getClientOriginalExtension();
        $previewImage = InterventionImage::make($mainImage)->fit(100, 100);
        $previewImagePath = Storage::disk('public')->putFile('images', (string) $previewImage->encode('jpg'));
        $mainImagePath = Storage::disk('public')->putFile('images', $mainImage);
        dd($previewImagePath, $mainImagePath);
//        $previewImagePath = Storage::disk('public')->putFile('images', $previewImage);
//        Image::create([
//            'path' => $mainImagePath,
//
//        ]);
        DB::commit();
    }

    public function update($data, $post)
    {
    }

}
