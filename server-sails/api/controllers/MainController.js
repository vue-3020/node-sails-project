/**
 * MainController
 *sails generate controller Box/xiaomi index
 * 
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



    /**
     * `MainController.index()`
     */
    index: function(req, res) {
        //接收存储内容
        loginbean = req.session.loginbean;
        console.log(loginbean);
        return res.send(200, {
            resultCode: 1,
            msg: '接收主页内容',
        });
    }
};

//拦截器