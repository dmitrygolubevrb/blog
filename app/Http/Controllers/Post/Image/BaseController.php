<?php


namespace App\Http\Controllers\Post\Image;


use App\Http\Controllers\Controller;
use App\Http\Services\Image\Service;

class BaseController extends  Controller
{

    public $service;

    public function __construct(Service $service)
    {
        $this->service = $service;
    }

}
