import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/',
            component: () => import('./components/Main/Index'),   //Второй метод импорта
            name: 'main.index'  // Имя роута по аналогии с laravel,
        },
        {
            path: '/posts/create',
            component: () => import('./components/Post/Create'),   //Второй метод импорта
            name: 'post.create'  // Имя роута по аналогии с laravel
        },

    ]
})
