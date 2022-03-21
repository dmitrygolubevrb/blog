<?php


namespace App\Http\Services\Category;


use App\Models\Category;

class Service
{

    public function store($data)
    {
        return Category::firstOrCreate($data);
    }

    public function update($data, $category)
    {
        return $category->update($data);
    }

}
