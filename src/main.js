import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import axios from "axios";


loadFonts()

const axiosInstance = axios.create({
})

const app = createApp(App).use(router).use(vuetify)
    app.config.globalProperties.axios = axiosInstance;
    app.mount('#app')
