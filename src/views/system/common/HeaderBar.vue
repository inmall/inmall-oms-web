<template>
  <div class="app-header-top-sidebar">
    <el-menu default-active="1"
             mode="horizontal"
             background-color="#18bc9c"
             text-color="#fff"
             active-text-color="#fff">
      <el-menu-item title="PC首页" @click="handleRedirect('http://www.shixinke.com')"><icon name="inmall-computer"></icon> </el-menu-item>
      <el-menu-item title="常用链接"><i class="el-icon-link"></i> </el-menu-item>
      <el-menu-item title="清除缓存" @click="handleClearCache"><i class="el-icon-delete"></i> </el-menu-item>
      <!--<el-menu-item title="切换主题">
          <ThemePicker></ThemePicker>
      </el-menu-item>-->
      <el-menu-item title="全屏" @click="handleFullScreen"><icon name="inmall-full-screen"></icon> </el-menu-item>
      <el-menu-item title="通知" @click="handleNotice"><i class="el-icon-bell"></i></el-menu-item>
    </el-menu>
    <el-dropdown trigger="hover"
                 :hide-on-click="false">
              <span class="el-dropdown-link">
                <el-avatar :size="16" src="https://empty" @error="errorHandler">
      <img :src="avatar"/>
    </el-avatar> {{ nickname }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click="handleRedirect('/personal/message')"><icon name="inmall-notify"></icon> 我的消息</el-dropdown-item>
        <el-dropdown-item @click="handleRedirect('/personal/profile')"><icon name="inmall-profile"></icon> 个人资料</el-dropdown-item>
        <el-dropdown-item @click="handleRedirect('/personal/password')"><icon name="inmall-password-update"></icon> 修改密码</el-dropdown-item>
        <el-dropdown-item divided
                          @click.native="handleLogout"><icon name="inmall-logout"></icon> 退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
    import {logout} from '@/api/system/passport';
    import {getStore} from '@/util/storage';
    export default{
        name: 'header-bar',
        data() {
            return {
                nickname: '',
                avatar: ''
            }
        },
        mounted() {
          this.init();
        },
        methods: {
            init: function() {
               const userInfo = getStore("userInfo", true);
               if (userInfo ) {
                   this.nickname = userInfo.nickname;
                   this.avatar = userInfo.avatar
               }
            },
            errorHandler() {
                return true
            },
            handleClearCache: function(){

            },
            handleFullScreen: function(){

            },
            handleNotice: function(){

            },
            handleLogout: function () {
                this.$confirm('确认退出?', '提示', {})
                    .then(() => {
                        logout().then(result => {
                            self.disabled = false;
                            if (result.code == 200) {
                                this.$store.commit("LOGOUT");
                                this.$message({
                                    message: '登出成功',
                                    type: 'success'
                                });
                                this.$router.push("/login");
                            } else {
                                this.$message({
                                    message: result.message,
                                    type: 'error'
                                });
                            }
                        });
                    })
                    .catch(() => {
                    });
            },
            handleRedirect: (url) => {
                if (url.substring(0, 4) == 'http') {
                    window.location.href = url;
                } else {
                    this.$router.push(url);
                }

            }
        }
    }
</script>
