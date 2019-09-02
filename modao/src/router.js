import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/Footer.vue';

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
      components:{
        default: () => import('@/views/home/index.vue'),
        footer: Footer
      } 
    },
    {
      path: '/bird',
      name: 'bird',
      components:{
        default: () => import('@/views/bird/index.vue'),
        footer: Footer
      }
    },
    {
      path: '/news',
      name: 'news',
      components:{
        default: () => import('@/views/news/index.vue'),
        footer: Footer
      }
    },
    {
      path: '/user',
      name: 'user',
      components:{
        default: () => import('@/views/user/index.vue'),
        footer: Footer
      }
    }
  ]
})
