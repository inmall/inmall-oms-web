import NavTabs from './NavTabs'
let installed = false

const install = {
  installed: false,
  install(Vue, options = {}) {
    if (this.installed) return
    this.installed = true
    Vue.component('nav-tabs', NavTabs)
  }
}

NavTabs.install = install.install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(NavTabs)
}

export default NavTabs
