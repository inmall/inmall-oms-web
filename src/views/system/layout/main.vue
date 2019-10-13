<template>
  <div class="app">
    <el-container>
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
                   @open="handleOpen"
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

      <el-container>
        <el-header class="app-header">
          <div style="width: 60px; cursor: pointer;"
               @click.prevent="toggleSideBar">
            <i v-show="!isCollapse" class="iconfont icon-inmall-collapse"></i>
            <i v-show="isCollapse" class="iconfont icon-inmall-open"></i>
          </div>
          <!-- 我是样例菜单 -->
          <el-menu default-active="1"
                   mode="horizontal"
                   @select="handleSelect"
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

          <div class="app-header-top-sidebar">
            <el-menu default-active="1"
                     mode="horizontal"
                     @select="handleSelect"
                     background-color="#18bc9c"
                     text-color="#fff"
                     active-text-color="#fff">
              <el-menu-item title="PC首页"><icon name="inmall-computer"></icon> </el-menu-item>
              <el-menu-item title="常用链接"><i class="el-icon-link"></i> </el-menu-item>
              <el-menu-item title="清除缓存"><i class="el-icon-delete"></i> </el-menu-item>
              <el-menu-item title="切换主题"><icon name="inmall-skin"></icon> </el-menu-item>
              <el-menu-item title="全屏"><icon name="inmall-full-screen"></icon> </el-menu-item>
              <el-menu-item title="通知"><i class="el-icon-bell"></i></el-menu-item>
            </el-menu>
            <el-dropdown trigger="hover"
                         :hide-on-click="false">
              <span class="el-dropdown-link">
                <icon name="inmall-avatar-unknown"></icon> {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><icon name="inmall-notify"></icon> 我的消息</el-dropdown-item>
                <el-dropdown-item><icon name="inmall-profile"></icon> 个人资料</el-dropdown-item>
                <el-dropdown-item><icon name="inmall-password-update"></icon> 修改密码</el-dropdown-item>
                <el-dropdown-item divided
                                  @click.native="logout"><icon name="inmall-logout"></icon> 退出登录
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>

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
  import NavTabs from "../../../components/vue-nav-tabs/NavTabs";
    export default {
        components: {
            NavTabs
        },
        data() {
            return {
                username: '诗心客',
                isCollapse: false,
                activeIndex: '/'
            }
        },
        methods: {
            toggleSideBar() {
                this.isCollapse = !this.isCollapse
            },
            logout: function () {
                this.$confirm('确认退出?', '提示', {})
                    .then(() => {
                        sessionStorage.removeItem('user');
                        this.$router.push('/login');
                    })
                    .catch(() => {
                    });
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleTabsEdit(targetName, action) {
                if (action === 'add') {
                    let newTabName = ++this.tabIndex + '';
                    this.editableTabs.push({
                        title: 'New Tab',
                        name: newTabName,
                        content: 'New Tab content'
                    });
                    this.editableTabsValue = newTabName;
                }
                if (action === 'remove') {
                    let tabs = this.editableTabs;
                    let activeName = this.editableTabsValue;
                    if (activeName === targetName) {
                        tabs.forEach((tab, index) => {
                            if (tab.name === targetName) {
                                let nextTab = tabs[index + 1] || tabs[index - 1];
                                if (nextTab) {
                                    activeName = nextTab.name;
                                }
                            }
                        });
                    }

                    this.editableTabsValue = activeName;
                    this.editableTabs = tabs.filter(tab => tab.name !== targetName);
                }
            }
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
