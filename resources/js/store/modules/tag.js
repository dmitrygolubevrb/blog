import Tag from "../../models/Tag";

const state = {
    tag: {
        title: null
    },
    isAdditionTag: false,
    tags: null,
    editTagId: null,
}

const getters = {
    tag: () => state.tag,
    tags: () => state.tags,
    editTagId: () => state.editTagId,
    isAdditionTag: () => state.isAdditionTag
}

const mutations = {
    setTag(state, tag) {
        state.tag = tag
    },
    setTags(state, tags) {
        state.tags = tags
    },
    setEditTagId(state, id) {
        state.editTagId = id
    },
    setIsAdditionTag(state) {
        state.tag = {
            title: null
        }
        state.editTagId = null
        state.isAdditionTag = !state.isAdditionTag
        state.tag = {title: null}
    }
}

const actions = {
    storeTag({commit, dispatch}, data) {
        const tag = new Tag({title: data.title})
        tag.save().then(() => {
            dispatch('getTags')
                .then(() => commit('setTag', {title: null}))
                .then(() => data.notification({type: 'success', title: 'Ok', text: `Тег ${data.title} успешно создан`}))
        }).catch(error => {
            data.notification({type: 'error', title: 'Ошибка добавления тега', text: error.response.data.message})
        })
    },

    destroyTag({dispatch}, data) {
        const tag = new Tag({id: data.tag.id})
        tag.delete().then(res => {
            dispatch('getTags')
                .then(() => data.notification({
                    type: 'success',
                    title: 'Ok',
                    text: `Тег ${data.tag.title} успешно удален`
                }))
        }).catch(error => {
            data.notification({type: 'error', title: 'Ошибка удаления', text: error.response.data.message})
        })
    },

    updateTag({dispatch, commit}, data) {
        const tag = new Tag({id: data.id})
        tag.id = data.tag.id
        tag.title = data.tag.title
        tag.patch().then(() => {
            dispatch('getTags')
                .then(() => commit('setEditTagId', null))
                .then(() => data.notification({type: 'success', title: 'Ok', text: `Тег успешно обновлен`}))
        }).catch(error => {
            data.notification({type: 'error', title: 'Ошибка обновления', text: error.response.data.message})
        })
    },

    getTags({commit}, notify) {
        new Tag().get().then(tags => {
            commit('setTags', tags.data)
        }).catch(error => {
            notify({type: 'error', title: 'Ошибка загрузки', text: error.response.data.message})
        })
    },

    changeEditTagId({commit, state}, tag) {
        if (state.isAdditionTag) commit('setIsAdditionTag')
        commit('setEditTagId', tag.id)
        commit('setTag', tag)
    },
    unsetEditTagId({commit}) {
        commit('setEditTagId', null)
        commit('setTag', {id: null, title: null})
    },
    showAddTag({commit}) {
        commit('setIsAdditionTag')
    }
}

export default {
    state, mutations, getters, actions
}
