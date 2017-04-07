'use strict'

const http = require('http')
const fs = require('fs')
const path = require('path')
const xtpl = require('xtpl');

const datas = require(path.join(__dirname,'datas.json'))

//create server
const server = http.createServer();

//request deal response
server.on('request',(req,res)=>{
      if (req.url.includes('index.html') || req.url == '/') {
          /*fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
            if (err) {
              console.log(err)
            }

            //4.返回
            res.setHeader("Content-Type","text/html;charset=utf-8");
            res.end(data);
          })*/

          /**
           * 参数1：要去替换的文件,xtpl.renderFile对fs.readFile的封装
           * 参数2：页面中each需要遍历的数据
           * 参数3：回调函数，其中可以通过回调函数的参数中的content，获取到生成好的html
           */
          xtpl.renderFile(path.join(__dirname,'index.html'),{
            array:datas
          },function(error,content){
              res.setHeader("Content-Type","text/html;charset=utf-8");
              res.end(content);
          });
      }else if(req.url.includes('site.css')){
          fs.readFile(path.join(__dirname,'site.css'),(err,data)=>{
            res.setHeader("Content-Type","text/css;charset=utf-8");
            res.end(data);
          })
      }
})

//start server
server.listen(3000,'127.0.0.1',(err)=>{
  if (err) {
    console.log(err)
  }
  console.log("start success");
})
