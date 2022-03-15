import Vue from "vue";
import Vuex from 'vuex';
import Post from './modules/post'
import Category from './modules/category'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Post,
        Category
    }
})
