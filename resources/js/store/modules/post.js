import Dropzone from 'dropzone'


const state = {
    mainImageDropzone: null,
    categoryId: '',
    tagIds: [],
    content: null,
    isShowPreview: false,
    title: null
}

const getters = {
    mainImageDropzone: () => state.mainImageDropzone,
    categoryId: () => state.categoryId,
    tagIds: () => state.tagIds,
    content: () => state.content,
    title: () => state.title,
    isShowPreview: () => state.isShowPreview
}

const mutations = {
    setMainImageDropzone(state, ref) {
        state.mainImageDropzone = new Dropzone(ref, {
            url: 'api/posts',
            autoProcessQueue: false,
            addRemoveLinks: true
        })
    },
    setCategoryId(state, id){
        state.categoryId = id
    },
    setTagIds(state, id){
        state.tagIds = id
    },
    setContent(state, content){
        state.content = content
    },
    toggleShowPreview(state){
        state.isShowPreview = !state.isShowPreview
    },
    setTitle(state, title){
        state.title = title
    }
}

const actions = {

}

export default {
    state, mutations, getters, actions
}
