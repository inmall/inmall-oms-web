import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/views/system/layout/main'),
      redirect: '/dashboard',
      children:[
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/system/dashboard/index'),
          meta:{
            title: '控制台',
            group: 'System'
          }
        },
        {
          path: 'goods/item/index',
          name: 'itemList',
          component: () => import('@/views/goods/item/list'),
          meta:{
            title: '商品列表',
            group: 'Goods'
          }
        },
        {
          path: 'goods/item/add',
          name: 'itemAdd',
          component: () => import('@/views/goods/item/add'),
          meta:{
            title: '商品列表',
            group: 'Goods'
          }
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/system/passport/login')
    }
  ]
})
