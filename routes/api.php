<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'posts', 'namespace' => 'Post'], function(){
    Route::get('/', 'IndexController');
    Route::post('/', 'StoreController');
    Route::get('/{post}', 'ShowController');
   Route::group(['prefix' => 'images', 'namespace' => 'Image'], function(){
      Route::post('/', 'StoreController');
   });
});

Route::group(['prefix' => 'admin', 'namespace' => 'Admin'], function(){
   Route::group(['prefix' => 'categories', 'namespace' => 'Category'], function(){
       Route::get('/', 'IndexController');
       Route::post('/', 'StoreController');
       Route::delete('/{category}', 'DestroyController');
       Route::patch('/{category}', 'UpdateController');
   });
   Route::group(['prefix' => 'tags', 'namespace' => 'Tag'], function(){
       Route::get('/', 'IndexController');
       Route::post('/', 'StoreController');
       Route::delete('/{tag}', 'DestroyController');
       Route::patch('/{tag}', 'UpdateController');
   });
});
