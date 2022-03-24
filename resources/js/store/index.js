import Vue from "vue";
import Vuex from 'vuex';
import Post from './modules/post'
import Category from './modules/category'
import Tag from './modules/tag'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Post,
        Category,
        Tag
    },
})
