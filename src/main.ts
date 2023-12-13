import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue';
import App from './App.vue'
import router from './router'

createApp(App)
  .use(IonicVue)
  .use(router)
  .mount('#app')
