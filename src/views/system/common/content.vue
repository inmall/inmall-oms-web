<template>
  <main class="site-content" >
    <el-tabs>
      <el-dropdown class="site-tabs__tools" :show-timeout="0">
        <i class="el-icon-arrow-down el-icon--right"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >关闭当前标签页</el-dropdown-item>
          <el-dropdown-item >关闭其它标签页</el-dropdown-item>
          <el-dropdown-item >关闭全部标签页</el-dropdown-item>
          <el-dropdown-item >刷新当前标签页</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-tab-pane
        v-for="item in mainTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name">
        <el-card >
          <iframe
            width="100%" height="100%" frameborder="0" scrolling="yes">
          </iframe>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </main>
</template>

<script>
  export default {
    data () {
      return {
          mainTabs:[]
      }
    },
    computed: {
    },
    methods: {

    }
  }
</script>

