import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/Home.vue'
import GameIndex from '@/components/Games/Index.vue'
import ContactPage from '@/components/Contact.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/game',
        component: GameIndex
    },
   
    {
        path: '/contact',
        component: ContactPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
