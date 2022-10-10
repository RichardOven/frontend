import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Vue.prototype.$http = axios


/*
Bootstrap
*/
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";



createApp(App).use(router).use(VueAxios, axios).mount('#app')
