<?php


namespace App\Http\Services\Image;


use Illuminate\Support\Facades\Storage;

class Service
{

    public function store($data)
    {
        $path = Storage::disk('public')->putFile('images', $data['image']);
        return url('storage/' . $path);
    }

}
