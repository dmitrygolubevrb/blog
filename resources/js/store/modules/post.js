import router from "../../router";
import Dropzone from 'dropzone'


const state = {
    mainImageDropzone: null,
    sliders: []
}

const getters = {
    mainImageDropzone: () => state.mainImageDropzone,
    sliders: () => state.sliders
}

const mutations = {
    setMainImageDropzone(state, ref) {
        state.mainImageDropzone = new Dropzone(ref, {
            url: 'api/posts',
            autoProcessQueue: false,
            addRemoveLinks: true
        })
    },
    addSlider(state) {
        state.sliders.push({id: state.sliders.length + 1})
    },
    destroySlider(state, id) {
        console.log(state.sliders);
    }
}

const actions = {}

export default {
    state, mutations, getters, actions
}
