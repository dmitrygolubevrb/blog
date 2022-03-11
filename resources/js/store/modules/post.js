import router from "../../router";
import Dropzone from 'dropzone'


const state = {
    dropzone: null
}

const getters = {
    dropzone: () => state.dropzone,
}

const mutations = {
    setDropzone(state, ref){
        state.dropzone = new Dropzone(ref, {
            url: 'api/posts',
            autoProcessQueue: false,
            addRemoveLinks: true
        })
    }
}

const actions = {

}

//Чтобы все заработало
export default {
    state, mutations, getters, actions
}
