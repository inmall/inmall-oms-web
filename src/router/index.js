import Vue from 'vue'
import Router from 'vue-router'
import {getToken} from '@/util/token'
import NProgress from 'nprogress'

Vue.use(Router)

const router =  new Router({
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
        {
          path: 'system/menu/list',
          name: 'menuList',
          component: () => import('@/views/system/menu/index'),
          meta:{
            title: '菜单列表',
            group: 'system'
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

router.beforeEach((to, from, next) => {
  NProgress.start();
  const token = getToken();
  if (!token && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
});

router.afterEach(transition => {
  NProgress.done();
})

export default router
