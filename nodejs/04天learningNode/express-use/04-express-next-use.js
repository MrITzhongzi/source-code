'use strict'

//导入express
const express= require('express')

//创建app
const app = express()

//请求、处理、响应
//可以处理get/post都可以
/**
 * next的两种书写方式【了解】
 */
/*
next 的第一种书写方式
 */
/*app.all('/*',(req,res,next)=>{
  res.write("<h1>我是经过第一步拿到的数据<h1>");

  next();
},(req,res,next)=>{
  res.write("<h1>第二部拿到数据<h1>");

  next();
},(req,res)=>{
  console.log(1111);
  res.end("<h1>第三部拿到所有的数据了</h1>");
})*/

app.all('/*',(req,res,next)=>{
    //console.log('来了');
    const username = 'zhangsan';

    if (username==null) {
      res.end("您还没登陆");
    }else{
      next();
    }
})

app.all('/studentlist',(req,res)=>{
  res.end("学生列表");
})

//开启web服务
app.listen(3000)
