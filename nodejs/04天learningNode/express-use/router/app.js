'use strict'

//导入express第三方包
const express = require('express')
const path = require('path')
const manRouter = require(path.join(__dirname,'manRouter.js'))
const womanRouter = require(path.join(__dirname,'womanRouter.js'))

//创建App
const app = express();

//处理(判断)路由有哪个路由文件来处理
//注意:这里只要写一级路由，如果发现一级路由是/man 到时候交给manRouter
app.use('/man',manRouter)
app.use('/woman',womanRouter)

//开启web服务
app.listen(3000,'127.0.0.1',(err)=>{
  if (err) {
    console.log(err);
  }
  console.log("express webserver start success!");
})
