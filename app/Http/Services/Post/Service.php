<?php


namespace App\Http\Services\Post;


use App\Models\Image;
use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image as InterventionImage;


class Service
{

    public function store($data)
    {
        try {

            DB::beginTransaction();

            $mainImage = $data['main_image'];
            if(Arr::exists($data, 'tags_ids')){
                $tagsIds = $data['tags_ids'];
                unset($data['tags_ids']);
            }
            unset($data['main_image']);

            $imageName = md5(Carbon::now() . $mainImage->getClientOriginalName())
                . '.' . $mainImage->getClientOriginalExtension();
            $previewImageName = 'preview_' . $imageName;

            InterventionImage::make($mainImage)
                ->fit(150, 150)
                ->save(storage_path('app/public/images/' . $previewImageName), 90);
            $mainImagePath = Storage::disk('public')
                ->putFileAs('/images', $mainImage, $imageName);

            $post = Post::create($data);
            Image::create([
                'path' => $mainImagePath,
                'url' => url('/storage/' . $mainImagePath),
                'preview_url' => url('/storage/images/' . $previewImageName),
                'post_id' => $post->id
            ]);
            if(isset($tagsIds)) $post->tags()->attach($tagsIds);

            DB::commit();

            return $post;

        } catch (\Exception $exception){
            DB::rollBack();
            return $exception->getMessage();
        }
    }

    public function index(){
//        $posts = DB::table('posts')->limit(10);
//        $categories = DB::table('categories')->join('posts', 'categories.id', '=', 'posts.category_id')->->get();
        $posts = DB::table('posts');
        $categories = DB::table('categories')->joinSub($posts, 'posts', function($join){
            $join->on('categories.id', '=', 'posts.category_id');
        })->get();
        dd($categories);
//        $posts = [];
//        $categories = Category::all();
//        foreach ($categories as $category) {
//            $postsByCategory = $category->posts->reverse()->take(10);
//            if($postsByCategory->isNotEmpty()) array_push($posts, [$category->title => PostResource::collection($postsByCategory)]);
//        }
//        return $posts;

    }

    public function update($data, $post)
    {
    }

}
