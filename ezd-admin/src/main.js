import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'
import setupInterceptor from './service/authService/setupInterceptor'
setupInterceptor(store);
createApp(App)
.use(router)
.use(store)
.mount('#app')