import Vue from "vue";
import router from "./router";
import Index from './components/Index';
import store from './store';
import VueEditor from 'vue2-editor'
import Notification from "vue-notification";

Vue.use(VueEditor)
Vue.use(Notification)

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
