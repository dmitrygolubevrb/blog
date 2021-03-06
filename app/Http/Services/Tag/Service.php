<?php


namespace App\Http\Services\Tag;


use App\Models\Tag;

class Service
{

    public function store($data)
    {
        return Tag::firstOrCreate($data);
    }

    public function update($data, $tag)
    {
        return $tag->update($data);
    }

}
