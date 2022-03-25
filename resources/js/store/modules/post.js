const state = {
    mainImageDropzone: null,
    categoryId: '',
    tagIds: [],
    content: null,
    isShowPreview: false,
    title: null,
    mainImage: null,
}

const getters = {
    mainImageDropzone: () => state.mainImageDropzone,
    categoryId: () => state.categoryId,
    tagIds: () => state.tagIds,
    content: () => state.content,
    title: () => state.title,
    isShowPreview: () => state.isShowPreview,
    mainImage: () => state.mainImage
}

const mutations = {
    setMainImageDropzone(state, dropzone) {
        state.mainImageDropzone = dropzone
    },
    setCategoryId(state, id) {
        state.categoryId = id
    },
    setTagIds(state, id) {
        state.tagIds = id
    },
    setContent(state, content) {
        state.content = content
    },
    toggleShowPreview(state) {
        state.isShowPreview = !state.isShowPreview
    },
    setTitle(state, title) {
        state.title = title
    },
    setMainImage(state, mainImage) {
        state.mainImage = mainImage
    }
}

const actions = {
    loadMainImageDropzone({commit}, data) {
        let mainImageDropzone = new data.dropzone(data.ref, {
            url: 'api/posts',
            autoProcessQueue: false,
            addRemoveLinks: true,
            maxFiles: 1,
        })
        mainImageDropzone.on('addedfile', () => {
            commit('setMainImage', URL.createObjectURL(state.mainImageDropzone.files[0]))
            document.getElementById('main-image').firstChild.classList.add('d-none');
            document.getElementsByClassName('dz-remove')[0].innerHTML = 'Удалить'
        })
        mainImageDropzone.on('removedfile', () => {
            if (mainImageDropzone.files[0]) {
                commit('setMainImage', URL.createObjectURL(mainImageDropzone.files[0]))
            } else {
                commit('setMainImage', null)
                document.getElementById('main-image').firstChild.classList.remove('d-none')
            }

        })
        mainImageDropzone.on('maxfilesexceeded', file => {
            mainImageDropzone.removeFile(file)
        })
        commit('setMainImageDropzone', mainImageDropzone)
    },
    validate({state}, notification) {
        let validatedFieldsList = [
            {
                field: state.title,
                error: {type: 'error', title: 'Ошибка валидации', text: 'Необходимо заполнить заголовок поста'}
            },
            {
                field: state.content,
                error: {type: 'error', title: 'Ошибка валидации', text: 'Поле контента пусто'}
            },
            {
                field: state.mainImage,
                error: {type: 'error', title: 'Ошибка валидации', text: 'Необходимо добавить главное изображение'}
            },
            {
                field: state.categoryId,
                error: {type: 'error', title: 'Ошибка валидации', text: 'Необходимо выбрать любую категорию'}
            },
        ]
        for (let field of validatedFieldsList) {
            if (!field['field']) {
                notification(field.error)
                return false
            }
        }
        return true
    },
    storePost({state, dispatch}, notification) {
        dispatch('validate', notification).then(isValid => {
            let data = new FormData()
            data.append('title', state.title)
            data.append('content', state.content)
            data.append('category_id', state.categoryId)
            data.append('tags_ids[]', state.tagIds)
            data.append('main_image', state.mainImageDropzone.getAcceptedFiles()[0])
            if (isValid) {
                axios.post('/api/posts', data).then(res => {
                    console.log(res);
                })
            }
        })
    }
}

export default {
    state, mutations, getters, actions
}
