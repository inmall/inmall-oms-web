<template>
  <el-header class="app-header">
    <div style="width: 60px; cursor: pointer;"
         @click.prevent="handleToggleSideBar">
      <i v-show="!isCollapse" class="iconfont icon-inmall-collapse"></i>
      <i v-show="isCollapse" class="iconfont icon-inmall-open"></i>
    </div>
    <!-- 头部菜单 -->
    <header-menu></header-menu>
    <!-- 头部边栏 -->
    <header-bar></header-bar>
  </el-header>
</template>
<script>
  import HeaderMenu from "./HeaderMenu";
  import HeaderBar from "./HeaderBar";
  export default{
      name: 'app-header',
      components: {
          HeaderMenu,
          HeaderBar
      },
      data() {
          return {
              isCollapse: false
          }
      },
      methods: {
          handleToggleSideBar() {
              this.isCollapse = !this.isCollapse
          },
      }

  }
</script>
