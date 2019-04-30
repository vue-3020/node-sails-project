<template>
  <div>
    <h2>分页</h2>
    <template>
      <el-table
        :data="getListData"
        height="550"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="Id"
          label="ID"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="jianJie"
          label="简介"
        >
        </el-table-column>
        <el-table-column
          prop="guoJi"
          label="国籍"
          width="180"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          width="180"
        >
          <template slot-scope="scope">
            <el-button
              @click="deleteClick(scope.row)"
              type="text"
              size="small"
            >删除</el-button>
            <el-button
              type="text"
              size="small"
               @click="upDataClick(scope.row)"
            >编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="fenye"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total,prev, pager, next"
        :total="getTotalCount"
        :page-size="pageSize"
        :current-page="pageIndex"
      >
      </el-pagination>
    </template>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      pageIndex: 1, //当前是第几条
      pageSize: 10, //没有显示几条
    }
  },
  computed: {
    // 内容存到 mapGetters 将内容写在 src\store\modules\main\queryListVuex.js 页面里
    ...mapGetters("queryListVuex", ["getListData", "getTotalCount"])
  },

  created() {
    // 页面初始化获取列表数据
    this.queryData()
  },
  methods: {
    ...mapActions("queryListVuex", ["queryList", "deleteListItem"]),

    handleSizeChange(val) {
      this.pageIndex = val;
      this.queryData();
    },
    //点击页面获取所以查出数据
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageIndex = val
      this.queryData();
    },
    //查询数据
    queryData() {
      var _this = this;
      _this.queryList({
        pageIndex: _this.pageIndex, //把当前是第几页
        pageSize: _this.pageSize, //每页显示多少条传给后台
      }).then(data => { //获取后台返回的数据
        //数据必须大于0
        if (data.msg.length > 0) {
          this.tableData3 = data.msg
        } else {
          this.$message({
            message: '没有数据',
            center: true
          })
        }
      })
    },

    //删除当前这个
    deleteClick(item) {
      var _this = this;
      this.$confirm('是否删除本条信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //确定要删除
        _this.deleteListItem({
          Id: item.Id, //获取id通过id删除内容
        }).then(data => {
          if (data.status == 200 && data.data.resultCode == 1) {
            //从新调用查询方法
            _this.queryData()
          }
          console.log(data);
        })
      }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },

    // 跳到详情界面，
    upDataClick(row){
      this.$router.push({
       path: "/home/page2",
       query:row
      });
    }
  },
}
</script>
<style >
.fenye {
  float: right;
  margin-top: 6px;
}
</style>