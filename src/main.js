import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as plugins from '@/plugin'
import moment from 'moment'

store.$axios = plugins.axios
store.$env = process.env

const app = createApp(App)

app.config.globalProperties.$moment = moment

app.use(store).use(router).mount('#app')

//app.config.globalProperties.$axios = plugins.axios
