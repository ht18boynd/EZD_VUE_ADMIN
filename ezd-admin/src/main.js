import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";



createApp(App)
.use(router)
.use(VueAwesomePaginate)
.mount('#app')