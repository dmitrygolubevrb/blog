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
        $posts = DB::table('posts')
            ->select(DB::raw('t2.*'))
            ->from(DB::raw('(select category_id from posts group by category_id) as t1,
            lateral (select posts.*, images.url, images.preview_url, categories.title as category_title
            from posts, images, categories
            where t1.category_id=posts.category_id AND posts.id=images.post_id AND posts.category_id=categories.id
            order by posts.created_at desc limit 10) as t2'))
            ->get();

        $postsByCategories = [];
        foreach ($posts as $post)
        {
            $postsByCategories[$post->category_title][] = $post;
        }
        return $postsByCategories;
    }

    public function update($data, $post)
    {
    }

}
