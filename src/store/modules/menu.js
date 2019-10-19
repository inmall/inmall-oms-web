import {setStore, removeStore} from '@/util/storage'

const menu = {
  state: {
    resourceList: [],
    menuList: []
  },
  mutations: {
    SET_MENU: (state, menuList) => {
      state.menuList = menuList
      setStore("menuList", menuList)
    },
    SET_RESOURCE: (state, resourceList) => {
      state.resourceList = resourceList
      setStore("resourceList", resourceList)
    },
    REMOVE_MENU: (state) => {
      state.menuList = []
      removeStore("menuList")
    }
  },
  actions: {
  }
}

export default menu
