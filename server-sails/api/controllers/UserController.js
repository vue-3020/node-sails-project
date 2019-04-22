/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



    /**
     * `UserController.zhuce()`
     */
  zhuce: function (req, res) {
    // var params = _.extend(req.query || {}, req.params || {}, req.body || {});  老版本的获取方法
    //req.allParams()  获取参数的方法
    debugger
    if (req.allParams().username.length === 0) {
      //给前端的返回值
      return res.send(200, {
        resultCode: 0,
        msg: '请输入账号！',
      })
    }
    if (req.allParams().password.length === 0) {
      return res.send(200, {
        resultCode: 0,
        msg: '请输入密码！',
      })
    }
    if (req.allParams().code.length === 0) {
      return res.send(200, {
        resultCode: 0,
        msg: '请输入验证码！',
      })
    }
    //返回给前端内容，
    res.send(200, {
      resultCode: 1,
      msg: '这是返回给前端的内容',
    })
 
    },

    /**
     * `UserController.login()`
     */
    login: function(req, res) {
        res.send('这是我要输出的内容')
    }
};