import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/Footer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('@/views/home/index.vue'),
        footer: Footer
      }
    },
    {
      // path: '/detail/:id', // :id中的id代表参数的名称
      // name: 'detail', // 命名路由
      path: '/detail',
      name: 'detail',
      components: {
        default: () => import('@/views/detail/detail.vue')
      }
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('@/views/home/company.vue')
    },
    {
      path: '/relationship',
      name: 'relationship',
      components: {
        default: () => import('@/views/home/relationship.vue'),
        footer: Footer
      }
    },
    {
      path: '/interview',
      name: 'interview',
      component: () => import('@/views/home/interview.vue')
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('@/views/home/question.vue')
    },
    {
      path: '/bird',
      name: 'bird',
      components: {
        default: () => import('@/views/bird/index.vue'),
        footer: Footer
      }
    },
    {
      path: '/news',
      name: 'news',
      components: {
        default: () => import('@/views/news/index.vue'),
        footer: Footer
      }
    },
    {
      path: '/goingtodo',
      name: 'goingtodo',
      components: {
        default: () => import('@/views/news/Goingtodo.vue'),
        footer: Footer
      }
    },
    {
      path: '/setting',
      name: 'setting',
      components: {
        default: () => import('@/views/news/setting.vue'),
        footer: Footer
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: {
        default: () => import('@/views/contact/index.vue'),
        footer: Footer
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: {
        default: () => import('@/views/contact/index.vue'),
        footer: Footer
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('@/views/user/index.vue'),
        footer: Footer
      }
    }
  ]
})
