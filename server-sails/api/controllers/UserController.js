/**
 * UserController
 * 1.命令行生成路由： 
//user为controller名,zhuce和login是方法名 
sails generate controller user zhuce login 
// 新增文件夹box
sails generate controller box/user zhuce login
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Q = require('q');
module.exports = {
    /**
     * 注册账号
     */
    zhuce: function(req, res) {
        var defer = Q.defer();
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

        // 查询数据库
        let userInfo = req.allParams()
            //插入之前先判断属性名是否相同
        let sql1 = `select * from user where username='${userInfo.username}'`
        User.query(sql1, function(error, results, fields) {
                if (error) {
                    console.log(error);
                    defer.reject(err);
                } else {
                    if (results.length > 0) {
                        return res.send(200, {
                            resultCode: 0,
                            msg: '已经被注册了',
                        })
                    } else {
                        User.create(userInfo).exec(function(err, created) {
                            console.log(err);
                            console.log(created); //返回的是创建的对象
                            res.send(200, {
                                resultCode: 1,
                                msg: '查询数据库返回的结果',
                            })
                        })
                    }
                }
            })
            //返回给前端内容，
            // res.send(200, {
            //   resultCode: 1,
            //   msg: '这是返回给前端的内容',
            // })

    },

    /**
     * 登录查询
     */
    chaxunUser: function(req, res) {
        // var defer = Q.defer();
        var params = _.extend(req.query || {}, req.params || {}, req.body || {});
        var sql3 = "select * from user where username='" + params.username + "' and password='" + params.password + "'"
        User.query(sql3, function(error, results, fields) {
            if (error) {
                defer.reject(error);
            } else {
                if (results.length > 0) {
                    //将查询内容放到session 里面
                    req.session.loginbean = {
                        resultCode: 1,
                        msg: '存储到session里在其他页面可以访问',
                    }
                    console.log(req.session);
                    // res.redirect('/')

                    res.send(200, {
                        resultCode: 1,
                        msg: '登录成功',
                    })
                } else {

                    res.send(200, {
                        resultCode: 0,
                        msg: '没有信息，登录失败',
                    })
                }
            }
        });
    }
};

// （1）查询到结果后 存储到seeion 里面保存 我们的登陆信息，让全局都知道我们是一个登陆状态