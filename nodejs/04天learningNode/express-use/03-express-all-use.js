'use strict'

//导入express
const express= require('express')

//创建app
const app = express()

//请求、处理、响应
//可以处理get/post都可以
app.all('/*',(req,res)=>{
  console.log("come here");
  res.end("111");
})

//开启web服务
app.listen(3000)
