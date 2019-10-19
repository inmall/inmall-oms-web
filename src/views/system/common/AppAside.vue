<template>
  <el-aside class="app-side app-side-left"
            :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'">
    <el-scrollbar style="height:100%">
      <div class="app-side-logo">
        <icon name="inmall-in"></icon>
        <span v-if="!isCollapse">印象商城</span>
      </div>
      <div>
        <el-menu default-active="1-4-1"
                 background-color="#2c3b41"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">系统首页</span>
            </template>
            <el-menu-item index="1-1">控制台</el-menu-item>
            <el-menu-item index="1-2">账户设置</el-menu-item>
            <el-menu-item index="1-3">登录日志</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航二</span>
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </el-scrollbar>
  </el-aside>
</template>

<script>
    export default{
        name: 'app-aside',
        components: {

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
