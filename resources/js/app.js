import Vue from "vue";
import router from "./router";
import Index from './components/Index';
import store from './store';
import VueEditor from 'vue2-editor'

Vue.use(VueEditor)

require('./bootstrap')

const app = new Vue({
    el: '#app',
    components: {
        Index,
    },
    router,
    store,
});
