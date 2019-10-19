import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import tab from './modules/tab.js';
import user from './modules/user'
import menu from './modules/menu'
export default new Vuex.Store({
  modules: {
    tab : tab,
    user: user,
    menu: menu
  }
})
