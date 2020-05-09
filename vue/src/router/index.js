import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/views/Main.vue'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
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
        component: ()=> import('@/views/register.vue'),
        meta: {guest: true}
      },
      {
        path: 'ucp',
        component: ()=> import('@/views/ucp/default.vue'),

        children: [
          {
            path: '',
            name: 'UCP',
            component: ()=> import('@/views/ucp/ucp.vue'),
            meta: {private: true}
          },
          {
            path: 'characters',
            name: 'Characters',
            component: ()=> import('@/views/ucp/characters.vue'),
            meta: {private: true}
          },
          {
            path: 'quiz',
            name: 'Quiz',
            component: ()=> import('@/views/ucp/quiz.vue'),
            meta: {private: true}
          }
        ]
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
      let userRole = Vue.prototype.$user.role
      if (!to.meta.roles || to.meta.roles.some(r => r == userRole)) {
        next()
        
      } else {
        next('/ucp')
      }

    } else {
      next('/')
    }

  } else {
    next()
  }
})

export default router
