import Vue from 'vue'
import App from './App.vue'
import router from './router'
import notifications from '@/components/notifications'
import VueJwtDecode from "vue-jwt-decode"

Vue.config.productionTip = false

Vue.use(notifications)

function hasToken() {
  return (localStorage.getItem("jwt") != null && localStorage.getItem("jwt") !== "null")
}

let user
if (hasToken()) {
  user = VueJwtDecode.decode(localStorage.getItem('jwt'))
}
Vue.prototype.$user = user

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
