import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/Home.vue'
import listGame from '@/components/Games/listGame.vue'
import CreateGame from '@/components/Games/createNew.vue'
import ContactPage from '@/components/Contact.vue'
import GameDetails from '@/components/Games/gameDetails.vue'
import LoginAdmin from '@/components/Authen/Login.vue'
import ForgotPassword from '@/components/Authen/ForgotPassword.vue'
// Banner
import ListBanner from '@/components/Banner/Index.vue'
import CreateBanner from '@/components/Banner/Create.vue'

//
import ListBlog from '@/components/Blog/listBlog.vue'
import CreateBlog from '@/components/Blog/createBlog.vue'
import testAdmin from '@/components/test.vue'



//Rank
import CreateRank from '@/components/Rank/rankCreate.vue'
import ListRank from '@/components/Rank/listRank.vue'
//Item
import createItem from '@/components/Item/createItem.vue'
import listItem from '@/components/Item/listItem.vue'

const routes = [
    {
        path: '/',
        component: HomePage,
        meta: { requiresAuth: true }
    },
    {
      path: '/test',
      component: testAdmin,
      
  },
    {
        path: '/login',
        component: LoginAdmin,
        meta: { requiresAuth: true }
    },
    {
        path: '/forgotpass',
        component: ForgotPassword,
        meta: { requiresAuth: true }
    },


    {
        path: '/admin/game',
        component: listGame,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/game/create',
        component: CreateGame,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/game/gameDetails/:id', // Định tuyến đến trang gameDetails với tham số ID
        component: GameDetails,
        name: "gameDetails",
        meta: { requiresAuth: true },

        props: true, // Cho phép truyền các tham số từ URL vào component

    },
    {
        path: '/admin/banner',
        name: "listbanner",
        component: ListBanner,
        meta: { requiresAuth: true }
    },
    
    {
        path: '/admin/banner/create',
        component: CreateBanner,
        name: "createbanner",
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/blog',
        name: "listblog",
        component: ListBlog,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/blog/create',
        name: "createblog",
        component: CreateBlog,
        meta: { requiresAuth: true }
    },
    //Rank-Start
    {
        path:'/admin/rank',
        component:ListRank
    },
    {
        path: '/admin/rank/create',
        component: CreateRank
    },
    //Rank-End
    //Item-Start
     {
        path:'/admin/item',
        component:createItem
    },
    {
        path:'/admin/item/create',
        component: listItem
    },
    //Item-End
    {
        path: '/admin/contact',
        component: ContactPage,
        meta: { requiresAuth: true }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    // Kiểm tra nếu route yêu cầu đăng nhập và không có token, chuyển hướng đến trang đăng nhập
    if (to.matched.some(record => record.meta.requiresAuth)) {
      const token = localStorage.getItem('token');
      if (!token) {
        if (to.path !== '/login') { // Ngăn chuyển hướng lại /login nếu đã ở đó
          next('/login');
        } else {
          next(); // Nếu đang ở /login, cho phép điều hướng
        }
      } else {
        // Nếu có token, cho phép điều hướng
        next();
      }
    } else {
      // Trang không yêu cầu đăng nhập, cho phép điều hướng
      next();
    }
  });
  

export default router
