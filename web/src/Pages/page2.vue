<template>
  <div>
    {{item}}
    <el-form
      style="width:500px;margin:100px auto 0"
      ref="form"
      :model="form"
      label-width="80px"
    >
      <el-form-item label="Id">
        <el-input v-model="form.Id" disabled></el-input>
      </el-form-item>
      <el-form-item label="名字">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input
          type="textarea"
          class="textarea-outer"
          v-model="form.jianJie"
        ></el-input>
      </el-form-item>
      <el-form-item label="国籍">
        <el-select v-model="form.guoJi">
          <el-option
            v-for="(item,index) in country"
            :key="index"
            :value="item.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        Id: '',
        name: '',
        jianJie: '',
        guoJi: '',
      },
      country: [{ name: "魏国" }, { name: "蜀国" }, { name: "吴国" }],
      itemId: {}
    }
  },
  created() {
    this.item = this.$route.query;
    this.form.Id = this.item.Id
    this.form.name = this.item.name
    this.form.jianJie = this.item.jianJie
    this.form.guoJi = this.item.guoJi
  },
  methods: {
    ...mapActions("queryListVuex", ["updataListItem"]),
    onSubmit() {
      let _this = this;
      _this.updataListItem(this.form).then(data=>{
         if(data.status ==200 && data.data.resultCode==1){
            this.$router.push("/home/page1");
         }
      }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
  }
}
</script>
<style>
.textarea-outer textarea {
  height: 150px;
}
</style>
