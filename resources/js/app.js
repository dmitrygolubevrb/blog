import Vue from "vue";
import router from "./router";
import Index from './components/Index';
import Header from "./components/Includes/Header";
import Footer from "./components/Includes/Footer";
import store from './store';  // При использовании vuex

require('./bootstrap')

const app = new Vue({
    el: '#app',
    components: {
        Index,
        Header,
        Footer
    },
    router,
    store
});
