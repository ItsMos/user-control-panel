import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '@/views/Home.vue'
import register from '@/views/register.vue'
import ucp from '@/views/ucp.vue'
import characters from '@/views/characters.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: 'register',
        name: 'Register',
        component: register,
        meta: {guest: true}
      },
      {
        path: 'ucp',
        name: 'UCP',
        component: ucp,
        meta: {private: true}
      },
      {
        path: '/ucp/characters',
        name: 'Characters',
        component: characters,
        meta: {private: true}
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.guest) {
    if (Vue.prototype.$user) {
      next('/')
    } else {
      next()
    }
  
  } else if (to.meta.private) {
    if (Vue.prototype.$user) {
      next()
    } else {
      next('/')
    }

  } else {
    next()
  }
})

export default router
