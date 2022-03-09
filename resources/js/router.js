import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

const route = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./components/Main/Index'),
            name: 'main.index'
        }
    ]
})



export default route
