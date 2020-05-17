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
        name: 'UCP',
        component: ()=> import('@/views/ucp/default.vue'),

        children: [
          {
            path: '',
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
          },
          {
            path: 'admin',
            name: 'Admin',
            meta: {
              private: true,
              roles: ['admin', 'tester']
            },
            component: ()=> import('@/views/ucp/adminIndex.vue'),

            children: [
              {
                path: '',
                component: ()=> import('@/views/ucp/adminHome.vue')
              },
              {
                path: 'apps',
                name: 'Applications',
                component: ()=> import('@/views/ucp/adminApps.vue')
              },
              {
                path: 'app/:id',
                name: 'Player Application',
                component: ()=> import('@/views/ucp/adminApp.vue')
              }
            ]
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
  if (to.name)
    document.title += ' - ' + to.name
  else if (to.matched && to.matched[to.matched.length - 2])
    document.title += ' - ' + to.matched[to.matched.length - 2].name
  
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
