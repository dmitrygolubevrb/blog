import Dropzone from 'dropzone'


const state = {
    mainImageDropzone: null,
    sliders: [],
}

const getters = {
    mainImageDropzone: () => state.mainImageDropzone,
    sliders: () => state.sliders,

}

const mutations = {
    setMainImageDropzone(state, ref) {
        state.mainImageDropzone = new Dropzone(ref, {
            url: 'api/posts',
            autoProcessQueue: false,
            addRemoveLinks: true
        })
    },
    addSlider(state, id) {
        state.sliders.push({id})
    },
    setDropzoneForSlider(state, data){
        state.sliders[state.sliders.length - 1][`dropzone_slider_${data.id}`] = new Dropzone(data.ref, {
            url: 'api/posts',
            autoProcessQueue: false,
            addRemoveLinks: true,
            maxFilesize: 50
        })
    },
    destroySlider(state, id) {
        state.sliders = state.sliders.filter((slider, key) => {
            return !(slider.id === id)
        })
    },
}

const actions = {
}

export default {
    state, mutations, getters, actions
}
