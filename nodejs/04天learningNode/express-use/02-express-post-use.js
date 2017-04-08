'use strict'

//导入express
const express= require('express')
const bodyParser = require('body-parser');

//创建app
const app = express()

// parse application/x-www-form-urlencoded 
// 用来解析浏览器传递过来的键值对的字符串参数 username=zhangsan&password=123
app.use(bodyParser.urlencoded({ extended: false }))

//请求、处理、响应
app.post('/login',(req,res)=>{
  console.log(req.body);
  res.end("POST登录成功");
})

//开启web服务
app.listen(3000)
