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
    zhuce: function(req, res) {
      if (req.allParams().username.length === 0) {
        return res.send(200, {
          resultCode: 0,
          msg: '请输入账号！',
        })
      }
    },


    /**
     * `UserController.login()`
     */
    login: function(req, res) {
        res.send('这是我要输出的内容')
    }
};