import Vue from 'vue'
import Index from './components/Index'
import router from './router'
import store from './store'

require('./bootstrap');

const app = new Vue({
    el: '#app',
    components: {
        Index
    },
    router,
    store
})
