import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/Home.vue'
import listGame from '@/components/Games/listGame.vue'
import CreateGame from '@/components/Games/createNew.vue'
import ContactPage from '@/components/Contact.vue'
import GameDetails from '@/components/Games/gameDetails.vue'
import LoginAdmin from '@/components/Authen/Login.vue'
import ForgotPassword from '@/components/Authen/ForgotPassword.vue'



const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: LoginAdmin
    },
    {
        path: '/forgotpass',
        component: ForgotPassword
    },
    

    {
        path: '/admin/game',
        component: listGame
    },
    {
        path: '/admin/game/create',
        component: CreateGame
    },
    {
        path: '/admin/game/gameDetails/:id', // Định tuyến đến trang gameDetails với tham số ID
        component: GameDetails,
        name: "gameDetails",

        props: true, // Cho phép truyền các tham số từ URL vào component

    },

    {
        path: '/admin/contact',
        component: ContactPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
