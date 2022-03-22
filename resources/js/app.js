import Vue from "vue";
import router from "./router";
import Index from './components/Index';
import store from './store';
import VueEditor from 'vue2-editor'
import Notification from "vue-notification";
import {BootstrapVue} from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueEditor)
Vue.use(Notification)
Vue.use(BootstrapVue)

require('./bootstrap')

const app = new Vue({
    el: '#app',
    components: {
        Index,
        Notification
    },
    router,
    store,
});
