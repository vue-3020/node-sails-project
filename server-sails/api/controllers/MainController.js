/**
 * MainController
 *sails generate controller Box/xiaomi index
 * 
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Q = require('q');

  // 分页
 function getListData(req, res) {
    var defer = Q.defer();
    //转成数字
    var paramsPageIndex = parseInt(req.pageIndex)
    var paramsPageSize = parseInt(req.pageSize)
    //limit分页公式：curPage是当前第几页；pageSize是一页多少条记录 limit (curPage-1)*pageSize,pageSize
    var sql = "select * from  sanguo limit " + (paramsPageIndex - 1) * paramsPageSize + "," + paramsPageSize;
    SanGuo.query(sql, [], function (err, data) {
      if (err) {
        defer.reject(err);
      } else {
        defer.resolve(data);
      }
    });
    return defer.promise;
  }

  // 获取分页内容的总条数
  function getListCount(req, res) {
    var defer = Q.defer();
    //查询走条数的sql
    var sql = "select count(*) as totalCount from sanguo"; //返回一共多少条
    SanGuo.query(sql, [], function (err, data) {
      if (err) {
        defer.reject(err);
      } else {

        defer.resolve(data[0].totalCount);
      }
    });
    return defer.promise;
  }

module.exports = {

  //将两个sql合并一个sql发送给前端
  getList: function (req, res) {
    // var params = _.extend(req.query || {}, req.params || {}, req.body || {});
      //接收存储内容
      var params = req.allParams()
    Q.all([getListData(params), getListCount(params)]).then(function (result) {
      var getListData = result[0]; //接收数据库返回来的多少条数据
      var getListCount = result[1]; //接受回来 的总条数
      return res.send(200, {
        resultCode: 1,
        msg: getListData,
        count: getListCount
      });
    }, function (err) {
      res.send(500, {
        success: false,
        msg: '查询数据失败',
        err: err
      });
    });
  },

};
