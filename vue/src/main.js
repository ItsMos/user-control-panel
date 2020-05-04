import Vue from 'vue'
import App from './App.vue'
import router from './router'
import notifications from '@/components/notifications'
import VueJwtDecode from "vue-jwt-decode"

Vue.config.productionTip = false

Vue.use(notifications)

Vue.prototype.ajax = async(path, body, method = 'GET') => {
  let res = await fetch(path, {
    method: method.toUpperCase(),
    headers: { "Content-Type": "application/json", Authorization: localStorage.token },
    body: JSON.stringify(body)
  })
  if (res.redirected) {
    window.location = res.url
    return
  }
  if (res.status == 200) {
    res = await res.json()
    return res
  }
}


function hasToken() {
  return (localStorage.token && localStorage.token != null && localStorage.token !== "null")
}

function refreshToken() {
  return new Promise(async (resolve, reject) => {
    if (!hasToken()) return reject('no token')
    let res = await fetch('/validateToken', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({token: localStorage.token})
    })
    if (res.status != 200) {
      delete localStorage.token
      return reject('invalid token')
    }

    res = await res.json()
    
    if (res.token) {
      let user = VueJwtDecode.decode(res.token)
      localStorage.token = res.token
      resolve(user)
    }
  })
}

async function init() {
  try {
    let data = await refreshToken()
    if (data) {
      let stats = await fetch("/stats", {
        headers: { "Content-Type": "application/json", Authorization: localStorage.token }
      })
      data.stats = await stats.json()
    }

    Vue.prototype.$user = data
  } catch (e) {Vue.prototype.$user = null}

  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}
init()
