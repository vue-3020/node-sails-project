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

#接收前端传过来的参数  res.send(req.body)
```
module.exports={ 
   zhuce: function(req, res) {
        res.send(req.body)
    },
}
```
# 安装数据库
```
cnpm i sails-mysql --save
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