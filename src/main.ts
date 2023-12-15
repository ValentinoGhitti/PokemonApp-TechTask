import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(IonicVue)
  .use(store)
  .use(router)
  .mount('#app')
