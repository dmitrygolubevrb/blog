<?php

namespace App\Http\Requests\Post;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|string',
            'content' => 'required|string',
            'main_image' => 'required|image',
            'category_id' => 'required|exists:categories,id',
            'tags_ids' => 'nullable|array',
            'tags_ids.*.id' => 'nullable|integer|exists:tags,id'
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Заполните заголовок поста',
            'title.string' => 'Заголовок поста должен быть текстом',
            'content.required' => 'Контент поста не должен быть пустым',
            'content.string' => 'Контент поста должен быть текстом',
            'main_image.required' => 'Необходимо загрузить главное изображение',
            'main_image.image' => 'Изображение должно быть в формате jpg, jpeg, png, bmp, gif, svg или webp',
            'category_id.required' => 'Необходимо выбрать категорию',
            'category_id.exists' => 'Категория не найдена',
            'tags_ids.array' => 'Теги должны отправляться массивом',
            'tags_ids.*.id.integer' => 'id тега должен быть числом',
            'tags_ids.*.id.exists' => 'Один из переданных тегов не найден'
        ];
    }
}
