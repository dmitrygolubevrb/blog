<?php

namespace App\Http\Requests\Admin\Category;

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
            'title' => 'required|string|unique:categories,title'
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Необходимо заполнить название категории',
            'title.string' => 'Название категории должно быть строкой',
            'title.unique' => "Категория $this->title уже существует или находится в корзине"
        ];
    }
}
