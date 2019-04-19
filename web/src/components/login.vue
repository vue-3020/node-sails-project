<template>
  <div>
    <div style="width:800px;margin:100px auto">
      <el-form
        :model="userInfo"
        label-width="80px"
        ref="userInfo"
      >
        <el-form-item label="活动名称">
          <el-input v-model="userInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select
            v-model="userInfo.region"
            placeholder="请选择活动区域"
          >
            <el-option
              label="区域一"
              value="shanghai"
            ></el-option>
            <el-option
              label="区域二"
              value="beijing"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="即时配送">
          <el-switch v-model="userInfo.delivery"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit('userInfo')"
          >立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
      <div>{{this.userInfo}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  data() {
    return {
      userInfo: {
        name: '',
        region: '',
        delivery: false,
      }
    }
  },
  methods: {
    //vuex数据
     ...mapActions('user', ['login']),
    onSubmit(formName) {
      let _this = this;
      _this.$refs[formName].validate((valid, obj) => {
        if (valid) {
          _this.login(_this.userInfo).then((data) => {
            console.log('前端推送到后台的返回值');
          }).catch(error => {
          })
        } else {
          return false;
        }
      });
    },
  }
}
</script>

