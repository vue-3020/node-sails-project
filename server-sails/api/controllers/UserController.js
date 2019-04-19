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
        res.send(req.body)
    },


    /**
     * `UserController.login()`
     */
    login: function(req, res) {
        res.send('这是我要输出的内容')
    }
};