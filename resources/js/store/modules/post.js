import Post from "../../models/Post";

const state = {
    posts: null,
    post: null,
    mainImageDropzone: null,
    categoryId: '',
    tagIds: [],
    contentPreview: '',
    content: null,
    isShowPreview: false,
    title: null,
    mainImage: null,
}

const getters = {
    posts: () => state.posts,
    post: () => state.post,
    mainImageDropzone: () => state.mainImageDropzone,
    categoryId: () => state.categoryId,
    tagIds: () => state.tagIds,
    contentPreview: () => state.contentPreview,
    content: () => state.content,
    title: () => state.title,
    isShowPreview: () => state.isShowPreview,
    mainImage: () => state.mainImage
}

const mutations = {
    setPosts(state, posts){
      state.posts = posts
    },
    setPost(state, post){
        state.post = post
    },
    setMainImageDropzone(state, dropzone) {
        state.mainImageDropzone = dropzone
    },
    setCategoryId(state, id) {
        state.categoryId = id
    },
    setTagIds(state, id) {
        state.tagIds = id
    },
    setContentPreview(state, preview){
      state.contentPreview = preview
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
    getPosts({state, commit}){
        new Post().get().then(posts => {
            commit('setPosts', posts[0])
            console.log(state.posts);
        }).catch(error => {
            console.log(error);
        })
    },
    getPost({state, commit}, id){
      const post = new Post().find(id)
    },
    storePost({state, dispatch}, notification) {
        dispatch('validate', notification).then(isValid => {
            if (isValid) {
                const post = new Post({
                    title: state.title,
                    content: state.content,
                    content_preview: state.contentPreview,
                    category_id: state.categoryId,
                    tags_ids: state.tagIds,
                    main_image: state.mainImageDropzone.getAcceptedFiles()[0]
                })
                post.save().then(res => {
                    console.log(res);
                }).catch(error => {
                    console.log(error);
                })
            }
        })
    },

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
                field: state.contentPreview,
                error: {type: 'error', title: 'Ошибка валидации', text: 'Поле превью контента пусто'}
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
    contentPreviewValidate({state}, notification){
        console.log(state.contentPreview.length);
        return false
    }

}

export default {
    state, mutations, getters, actions
}
