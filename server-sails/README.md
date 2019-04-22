# sails项目
（1）sails全局安装

```
npm install sails -g
```
(2)创建项目
```
sails new server-sails
```
(3)进入刚才新建项目的目录
```
cd server-sails
```
(4) 启动项目
```
node app.js 或者 sails lift
```
（5）安装mysql模块
```
npm install sails-mysql --save 
```

# 命令行生成路由
user为controller名,zhuce和login是方法名 
```
sails generate controller user zhuce login  
```
## 渲染页面:
```
module.exports={ 
   zhuce: function(req, res) {
        res.send(req.body)
    },
  login:function(req,res){ 
    res.send('这是我要输出的内容')
  } 
```
# 通过路由 查找内容
```
http://localhost:1337/user/login
```
![avatar](./images/1.png)
## 在url里输入内容
![avatar](./images/2.png)

# 返回给前端的内容  res.send(req.body)
```
module.exports={ 
   zhuce: function(req, res) {
        res.send(req.body)
    },
}
```


# 利用vscode调试页面
![avatar](./images/3.png)

2现在匹配
![avatar](./images/4.png)
5启动会报错是路径的问题
![avatar](./images/5.png)
6我们从新修改一下路径
![avatar](./images/6.png)

7请注意 如何开着 node app.js 就无法打开控制台调试所以我们要关闭node app.js后再打开调试功能


# 从前台post提交数据到后端返回数据流程
  
### （1）web\src\components\login.vue前端提交数据到vuex里面
![avatar](./images/7.png)

### （2）web\src\store\modules\login\user.js 的vuex管理
![avatar](./images/8.png)
### （3）web\src\api\login.js 发起请求
![avatar](./images/9.png)
### （4）web\src\api\server.ip.js配置动态路由
![avatar](./images/10.png)
### （5）web\src\utils\httpAxios.js发起ajax请求
![avatar](./images/11.png)
### （6）server-sails\config\cors.js 解决跨域
![avatar](./images/12.png)
### （7）server-sails\api\controllers\UserController.js接收内容返回给前端
![avatar](./images/13.png)
### （8）web\src\store\modules\login\user.js前端接收参数
![avatar](./images/14.png)
### （9）web\src\store\modules\login\user.js把返回值返给login页面
![avatar](./images/15.png)
### （11）web\src\components\login.vue前端接收返回值，绑定模板
![avatar](./images/16.png)


# 安装数据库
```
cnpm i sails-mysql --save
```