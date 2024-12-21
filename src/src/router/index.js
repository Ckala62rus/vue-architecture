import {createRouter, createWebHistory} from 'vue-router'
// import MainPage from '@/views/template/MainPage'
import HomePage from "@/views/Pages/HomePage"
import TmpForm from "@/views/Pages/Form"


const routes = [
    {path: '/', name: 'home', component: HomePage},
    {path: '/form', name: 'form', component: TmpForm},
    // // {path: '/', name: 'home', component: MainPage},
    {path: '/warehouse', name: 'warehouse',  component: () => import('@/views/Warehouse.vue')},
    {path: '/login', name: 'login', meta: { transition: 'slide-left' }, component: () => import('@/views/LoginPage.vue')},
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
