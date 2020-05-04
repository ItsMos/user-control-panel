import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/views/Main.vue'
import Home from '@/views/Home.vue'
import register from '@/views/register.vue'
import ucp from '@/views/ucp.vue'
import characters from '@/views/characters.vue'
import quiz from '@/views/quiz.vue'

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
      },
      {
        path: '/ucp/quiz',
        name: 'Quiz',
        component: quiz,
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
  document.title = 'Pacific Roleplay'
  document.title+= to.name? ' - '+to.name : ''

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
