'use strict'

//导入express第三方包
const express = require('express')

//创建App
const app = express();

//请求、处理、响应
/*app.get('/',(req,res)=>{
  res.end("我是服务器")
})*/
app.get('/login',(req,res)=>{
  console.log(req.query);
  res.end("我是服务器")
})

//开启web服务
app.listen(3000,'127.0.0.1',(err)=>{
  if (err) {
    console.log(err);
  }
  console.log("express webserver start success!");
})
