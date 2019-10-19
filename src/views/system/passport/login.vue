<template>
  <div class="login-container">
    <el-container>
    <el-header>
      <div class="logo">
        <icon name="inmall-in"></icon> 印象商城
      </div>

    </el-header>
    <el-main>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="login-form"
               status-icon>
        <h3 class="title">管理运营后台-登录</h3>
        <el-form-item prop="username">
          <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号" prefix-icon="el-icon-user">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码" prefix-icon="el-icon-lock">

          </el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;" @click="handleLogin('loginForm')" :loading="loading" :disabled="disabled">登录</el-button>
          <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
        </el-form-item>
      </el-form>

    </el-main>
    </el-container>
  </div>
</template>

<script>
    import {Message} from 'element-ui';
    import {login} from '@/api/system/passport';
    export default {
        data() {
            return {
                loading: false,
                loginForm: {
                    username: '',
                    password: ''
                },
                loginRules: {
                    username: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                        { min: 3, max: 50, message: '账号长度在 3 到 50 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 50, message: '密码长度在 6 到 50 个字符', trigger: 'blur' }
                    ]
                },
                checked: true,
                disabled: false
            };
        },
        created(){

        },
        methods: {
            handleLogin(formName) {
                let self = this;
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.disabled = true;
                        //
                       login(self.loginForm.username, self.loginForm.password).then(result => {
                            self.disabled = false;
                            if (result.code == 200) {
                                this.$store.commit("LOGIN", result.data);
                                this.$message({
                                    message: '恭喜你，登录成功',
                                    type: 'success'
                                });
                                this.$router.push("/");
                            } else {
                                this.$message({
                                    message: result.message,
                                    type: 'error'
                                });
                            }
                        });
                        this.loading = false;
                    }else{
                        return false;
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
body{
    .el-container{
      background:#75b9e6;
      width:100%;
      height:100%;
      position:fixed;
    }
    .el-header{margin:0 auto;margin-top:50px;text-align: center;}
    .logo{font-size:36px;line-height:120px;color:#fff;}
    .el-main{padding:0px;}
    min-height: 100%;
    width: 100%;
    height:100%;
    margin:0;
    padding:0;
    background-color: #75b9e6;
    overflow: hidden;
    .login-form {
      /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
      -webkit-border-radius: 5px;
      border-radius: 5px;
      -moz-border-radius: 5px;
      background-clip: padding-box;
      margin: 50px auto;
      width: 350px;
      padding: 35px 35px 15px 35px;
      background: #fff;
      border: 1px solid #eaeaea;
      box-shadow: 0 0 25px #cac6c6;
      .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
      }
      .remember {
        margin: 0px 0px 35px 0px;
      }
    }
  }

</style>
