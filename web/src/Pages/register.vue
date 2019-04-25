<template>
  <div class="login-wrap">
    <p style="color:#fff">插入之前先查询数据库是否有相同的名字如果有相同的名字就无法存入内容,并且需要提示用户已经有注册</p>
    <div class="ms-title">后台注册系统</div>
    <div class="ms-login">
      <el-form
        :model="userInfo"
        :rules="rules"
        ref="userInfo"
        label-width="0px"
        class="demo-userInfo"
      >
        <el-form-item prop="username">
          <el-input
            v-model="userInfo.username"
            prefix-icon="el-icon-goods"
            placeholder="username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            ref="password"
            class="form-inputs"
            prefix-icon="el-icon-edit login-pwd-icon"
            @input="onfocus"
            type="password"
            placeholder="密码"
            v-model="userInfo.password"
            @keyup.enter.native="Clickzhuce('userInfo')"
            v-if=!isShow
          >
            <i
              slot="suffix"
              class="el-icon-view"
              @click="lookPass"
            ></i>
          </el-input>
          <el-input
            ref="password"
            class="form-inputs"
            placeholder="密码"
            prefix-icon="el-icon-edit login-pwd-icon"
            @input="onfocus"
            type="text"
            v-model="userInfo.password"
            @keyup.enter.native="Clickzhuce('userInfo')"
            v-if=isShow
          >
            <i
              slot="suffix"
              class="el-icon-view"
              @click="lookPass"
            ></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="userInfo.code"
            prefix-icon="el-icon-goods"
            placeholder="code"
          ></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button
            type="primary"
            :loading="loading"
            @click="Clickzhuce('userInfo')"
          >登录</el-button>
        </div>
         <el-button style="margin-top:6px" type="text" @click="clickReg">跳转到登录</el-button>
      </el-form>
    </div>
    <div class="neirong">{{this.userInfo}}</div>
    <div style="color:#fff;font-size:30px;">
      {{msgData}}
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  data() {
    return {
      loading: false, //页面加载的 按钮加载
      isShow: false, //点击眼睛显示密码
      userInfo: {
        username: 'user1',
        password: 'user1',
        code: '',
      },
      msgData: '',
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    //vuex数据
    ...mapActions('user', ['zhuCe']),
    //登录
    Clickzhuce(formName) {
      let _this = this
      this.$refs[formName].validate(valid => { // 验证elementUi 表单
        if (valid) {
          this.loading = true
          //去vuex内容，
          _this.zhuCe(_this.userInfo).then((data) => {
            console.log(data);
            this.msgData = data.msg
          }).catch(error => {
              this.$message({
                  message: error,
                  type: 'error'
                });
            console.log(error);
          })
          this.loading = false
        } else {
          this.$message({
            message: '登录信息失败',
            center: true
          })
          this.loading = false
          return false
        }
      })
    },
     clickReg(formName){
        this.$router.push("/Login");
    },
    //切换是否显示密码
    lookPass() {
      this.isShow = !this.isShow
    },
    //关闭加载按钮
    onfocus() {
      this.loading = false
    }
  }
}
</script>

<style>
html,
body,
#app,
.wrapper,
.login-wrap {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.login-wrap {
  background: #324157;
}

.ms-title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -230px;
  text-align: center;
  font-size: 30px;
  color: #fff;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 200px;
  margin: -150px 0 0 -190px;
  padding: 40px;
  border-radius: 5px;
  background: #fff;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
}
.neirong {
  color: #fff;
}
</style>