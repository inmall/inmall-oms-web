<template>
  <aside class="site-sidebar">
    <div class="site-sidebar__inner">
      <el-menu
        :collapse="sidebarFold"
        :collapseTransition="false"
        class="site-sidebar__menu">
        <el-menu-item index="home">
          <icon name="inmall-home" class="site-sidebar__menu-icon"></icon>
          <span slot="title">首页</span>
        </el-menu-item>
        <sub-menu
          v-for="menu in menuList"
          :key="menu.menuId"
          :menu="menu"
          :dynamicMenuRoutes="dynamicMenuRoutes">
        </sub-menu>
      </el-menu>
    </div>
  </aside>
</template>

<script>
  import SubMenu from './menu'
  export default {
    data () {
      return {
        dynamicMenuRoutes: [],
          menuList:[]
      }
    },
    components: {
      SubMenu
    },
    computed: {

    },
    watch: {
      $route: 'routeHandle'
    },
    created () {

    },
    methods: {
      // 路由操作
      routeHandle (route) {

      }
    }
  }
</script>
