
const state = {
    title: null
}

const getters = {
    title: () => state.title
}

const mutations = {
    setTitle(state, title){
        state.title = title
    }
}

const actions = {

}

export default {
    state, mutations, getters, actions
}
