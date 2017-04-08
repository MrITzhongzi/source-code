'use strict'

const express = require('express')

const womanRouter = express.Router();

womanRouter.get('/beg',(req,res)=>{
  res.end("LV 香奈儿 Gucci");
});

womanRouter.get('/yf',(req,res)=>{
  res.end("好看的");
});

womanRouter.get('/kh',(req,res)=>{
  res.end("迪奥，圣罗兰");
});

module.exports = womanRouter
