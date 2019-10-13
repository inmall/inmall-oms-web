// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import '@/assets/theme/index.css'
import '@/assets/css/index.scss'
import VueIconFont from 'vue-icon-font'
import store from '@/store'
Vue.use(VueIconFont)

/* font-class */
import '@/assets/font/iconfont.css'

/* symbol,svg */
import '@/assets/font/iconfont.js'

Vue.use(ElementUI, {
  size: 'small',
  locale
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
