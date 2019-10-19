<template>
  <div class="app">
    <el-container>
      <app-aside></app-aside>
      <el-container>
        <app-header></app-header>
        <el-main class="app-body">
          <nav-tabs></nav-tabs>
          <div class="child-page">
            <template>
              <router-view/>
            </template>
          </div>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import AppHeader from "@/views/system/common/AppHeader";
  import AppAside from "@/views/system/common/AppAside";
  import NavTabs from "../../../components/vue-nav-tabs/NavTabs";
  import ThemePicker from "@/components/theme-picker";


  export default {
        components: {
            AppHeader,
            AppAside,
            NavTabs,
            ThemePicker
        },
        data() {
            return {
                username: '诗心客',
                isCollapse: false,
                activeIndex: '/'
            }
        },
        methods: {

        },
        mounted () {

        },
        computed: {

        },
        watch: {

        }
    }
</script>

<style>
  .el-main{padding:0;}
  .child-page{padding:5px 20px;}
</style>
