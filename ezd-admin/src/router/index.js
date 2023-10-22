import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/Home.vue'
import listGame from '@/components/Games/listGame.vue'
import CreateGame from '@/components/Games/createNew.vue'
import ContactPage from '@/components/Contact.vue'
import GameDetails from '@/components/Games/gameDetails.vue'



const routes = [
    {
        path: '/',
        component: HomePage
    },
    

    {
        path: '/game',
        component: listGame
    },
    {
        path: '/game/create',
        component: CreateGame
    },
    {
        path: '/game/gameDetails/:id', // Định tuyến đến trang gameDetails với tham số ID
        component: GameDetails,
        name: "gameDetails",

        props: true, // Cho phép truyền các tham số từ URL vào component

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
