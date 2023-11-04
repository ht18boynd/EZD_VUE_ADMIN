import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/components/Home.vue';
import listGame from '@/components/Games/listGame.vue';
import CreateGame from '@/components/Games/createNew.vue';
import GameDetails from '@/components/Games/gameDetails.vue';
import LoginAdmin from '@/components/Authen/Login.vue';
import ForgotPassword from '@/components/Authen/ForgotPassword.vue';
import ListBanner from '@/components/Banner/Index.vue';
import CreateBanner from '@/components/Banner/Create.vue';
import ListBlog from '@/components/Blog/listBlog.vue';
import CreateBlog from '@/components/Blog/createBlog.vue';
import testAdmin from '@/components/test.vue';
import PendingList from "@/components/Transaction/pendingList.vue";
import SuccessList from "@/components/Transaction/successList.vue";
import FailedList from "@/components/Transaction/failedList.vue";
import ListUser from "@/components/User/listUser.vue";
import ListStaf from "@/components/User/listStaf.vue";
const routes = [
  { path: '/', component: HomePage, meta: { requiresAuth: true } },
  { path: '/test', component: testAdmin },
  { path: '/login', component: LoginAdmin, meta: { requiresAuth: true } },
  { path: '/forgotpass', component: ForgotPassword, meta: { requiresAuth: true } },
  { path: '/admin/game', component: listGame, meta: { requiresAuth: true } },
  { path: '/admin/game/create', component: CreateGame, meta: { requiresAuth: true } },
  {path: '/admin/game/gameDetails/:id',component: GameDetails, name: "gameDetails",  meta: { requiresAuth: true },  props: true,  },
  { path: '/admin/banner', name: "listbanner", component: ListBanner, meta: { requiresAuth: true } },
  { path: '/admin/banner/create', component: CreateBanner, name: "createbanner", meta: { requiresAuth: true } },
  { path: '/admin/blog', name: "listblog", component: ListBlog, meta: { requiresAuth: true } },
  { path: '/admin/blog/create', name: "createblog", component: CreateBlog, meta: { requiresAuth: true } },
  { path: '/admin/transaction', component: PendingList, meta: { requiresAuth: true } },
  { path: '/admin/transaction/success', component: SuccessList, meta: { requiresAuth: true } },
  { path: '/admin/transaction/failed', component: FailedList, meta: { requiresAuth: true } },
  { path: '/admin/user/listUser', component: ListUser, meta: { requiresAuth: true } },
  { path: '/admin/user/listStaf', component: ListStaf, meta: { requiresAuth: true } },
];

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token');
    if (!token) {
      if (to.path !== '/login') next('/login');
      else next();
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
