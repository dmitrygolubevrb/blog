import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/',
            component: () => import('./components/Main/Index'),
            name: 'main.index'
        },
        {
            path: '/blog',
            component: () => import('./components/Blog/Index'),
            name: 'blog.index'
        },

        {
            path: '/admin',
            component: () => import('./components/Admin/Index'),
            name: 'admin.index'
        },
        {
            path: '/admin/categories',
            component: () => import('./components/Admin/Category/Index'),
            name: 'admin.category.index'
        },
        {
            path: '/admin/tags',
            component: () => import('./components/Admin/Tag/Index'),
            name: 'admin.tag.index'
        },
        {
            path: '/posts/create',
            component: () => import('./components/Post/Create'),
            name: 'post.create'
        },



    ]
})
