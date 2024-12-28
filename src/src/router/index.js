import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/views/Pages/HomePage"
import TmpForm from "@/views/Pages/Form"
import TmpPasswordReset from "@/views/template/PasswordReset"


const routes = [
    {path: '/', name: 'home', component: HomePage},
    {path: '/form', name: 'form', component: TmpForm},
    {path: '/password-reset', name: 'password-reset', component: TmpPasswordReset},
    {path: '/warehouse', name: 'warehouse',  component: () => import('@/views/Warehouse.vue')},
    {path: '/login', name: 'login', meta: { transition: 'slide-left' }, component: () => import('@/views/LoginPage.vue')},
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/views/template/Page404') },
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
