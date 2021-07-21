import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import GoogleAuth from '@/config/google_oAuth.js'
import store from './store/store'
import {sync} from 'vuex-router-sync'

Vue.config.productionTip = false

const gauthOption = {
  clientId: '726378269682-2ggmtv86fq0bkq9ash34f74ku0ur3orj.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)

sync(store, router)

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
