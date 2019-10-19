<template>
  <el-menu default-active="1"
           mode="horizontal"
           background-color="#18bc9c"
           text-color="#fff"
           active-text-color="#ffd04b">
    <el-menu-item index="1"><i class="el-icon-s-home"></i> 首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title"><icon name="inmall-application"></icon> 应用</template>
      <el-menu-item index="2-1"><icon name="inmall-mobile-app"></icon> APP</el-menu-item>
      <el-menu-item index="2-2"> <icon name="inmall-wechat-platform"></icon> 微信公众平台</el-menu-item>
      <el-menu-item index="2-3"><icon name="inmall-pc-web"></icon> PC商城</el-menu-item>
      <el-menu-item index="2-4"><icon name="inmall-h5"></icon> H5商城</el-menu-item>
      <el-menu-item index="2-5"><icon name="inmall-wemall"></icon> 微信商城</el-menu-item>
      <el-menu-item index="2-6"><icon name="inmall-mini-program"></icon> 微信小程序</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><i class="el-icon-goods"></i> 商品</el-menu-item>
    <el-menu-item index="4"><icon name="inmall-order-list"></icon> 订单</el-menu-item>
    <el-menu-item index="5"><i class="el-icon-user"></i> 用户</el-menu-item>
    <el-menu-item index="6"><icon name="inmall-operation"></icon> 运营</el-menu-item>
    <el-menu-item index="7"><icon name="inmall-finance-manage"></icon> 财务</el-menu-item>
    <el-menu-item index="8"><icon name="inmall-stats"></icon> 统计</el-menu-item>
    <el-menu-item index="9"><i class="el-icon-setting"></i> 设置</el-menu-item>
  </el-menu>
</template>
<script>
    import {getStore} from "@/util/storage";
    import {getMenuList} from "@/api/system/menu"
    export default{
        name: 'header-menu',
        data() {
            return {
                menuList: []
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init: function() {
                let menuList = getStore("menuList");
                if (!menuList) {
                     getMenuList().then(result => {
                         if (result.code == 200) {
                             this.$store.commit("SET_MENU", result.data);
                             this.menuList = result.data;
                         }
                     });
                }
            },
            handleClearCache: function(){

            },
            handleFullScreen: function(){

            },
            handleNotice: function(){

            }
        }
    }
</script>
