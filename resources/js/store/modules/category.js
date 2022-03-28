import Category from "../../models/Category";

const state = {
    category: {
        title: null
    },
    isAdditionCategory: false,
    categories: null,
    editCategoryId: null,
}

const getters = {
    category: () => state.category,
    categories: () => state.categories,
    editCategoryId: () => state.editCategoryId,
    isAdditionCategory: () => state.isAdditionCategory
}

const mutations = {
    setCategory(state, category) {
        state.category = category
    },
    setCategories(state, categories) {
        state.categories = categories
    },
    setEditCategoryId(state, id) {
        state.editCategoryId = id
    },
    setIsAdditionCategory(state) {
        state.category = {
            title: null
        }
        state.editCategoryId = null
        state.isAdditionCategory = !state.isAdditionCategory
        state.category = {title: null}
    }
}

const actions = {
    storeCategory({commit, dispatch}, data) {
        const category = new Category({title: data.title})
        category.save().then(() => {
            dispatch('getCategories')
                .then(() => commit('setCategory', {title: null}))
                .then(() => data.notification({
                    type: 'success',
                    title: 'Ok',
                    text: `Категория ${data.title} успешно создана`
                }))
        }).catch(error => {
            data.notification({type: 'error', title: 'Ошибка создания', text: error.response.data.message})
        })
    },

    destroyCategory({dispatch}, data) {
        const category = new Category({id: data.category.id})
        category.delete().then(() => {
            dispatch('getCategories', data.notification)
                .then(() => data.notification({
                    type: 'success',
                    title: 'Ok',
                    text: `Категория ${data.category.title} успешно удалена`
                }))
        }).catch(error => {
            data.notification({type: 'error', title: 'Ошибка удаления', text: error.response.data.message})
        })
    },

     updateCategory({dispatch, commit}, data) {
        const category = new Category({id: data.id})
        category.id = data.category.id
        category.title = data.category.title
        category.patch().then(() => {
             dispatch('getCategories')
                .then(() => commit('setEditCategoryId', null))
                .then(() => data.notification({type: 'success', title: 'Ok', text: `Категория успешно обновлена`}))
        }).catch(error => {
            data.notification({type: 'error', title: 'Ошибка обновления', text: error.response.data.message})
        })

    },

    getCategories({commit}, notify) {
        new Category().get().then(categories => {
            if (categories.data.length) {
                commit('setCategories', categories.data)
            } else {
                commit('setCategories', null)
                notify({type: 'warn', title: 'Категории', text: 'Необходимо добавить категории'})
            }
        }).catch(error => notify({type: 'error', title: 'Ошибка загрузки', text: error.response.data.message}))
    },

    changeEditCategoryId({commit, state}, category) {
        if (state.isAdditionCategory) commit('setIsAdditionCategory')
        commit('setEditCategoryId', category.id)
        commit('setCategory', category)
    },
    unsetEditCategoryId({commit}) {
        commit('setEditCategoryId', null)
        commit('setCategory', {id: null, title: null})
    },
    showAddCategory({commit}) {
        commit('setIsAdditionCategory')
    }
}

export default {
    state, mutations, getters, actions
}
