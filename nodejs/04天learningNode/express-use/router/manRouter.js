'use strict'

const express = require('express')

//创建男士路由对象
const manRouter = express.Router();

manRouter.get('/ld',(req,res)=>{
  res.end("金利来领带就是好");
})

manRouter.get('/xz',(req,res)=>{
   res.end("圣得西西装、柒牌男装");
});

manRouter.post('/px',(req,res)=>{
  res.end("鳄鱼皮鞋就是好");
});

module.exports = manRouter
