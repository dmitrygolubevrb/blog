<?php

namespace App\Http\Requests\Admin\Tag;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'id' => 'required|integer|exists:categories,id',
            'title' => 'required|string|unique:categories,title,' . $this->id
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Необходимо заполнить название тега',
            'title.string' => 'Название тега должно быть строкой',
            'title.unique' => 'Такой тег уже существует или находится в корзине'
        ];
    }
}
