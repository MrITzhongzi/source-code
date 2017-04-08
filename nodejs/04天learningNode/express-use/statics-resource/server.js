'use strict'

const express = require('express')
const fs = require('fs')
const path = require('path')
const xtpl = require('xtpl');

const datas = require(path.join(__dirname,'datas.json'))

//create app
const app = express();

//怎么处理静态资源 express
//statics代表静态资源的根目录
app.use(express.static('statics'));

app.get('/',(req,res)=>{
    xtpl.renderFile(path.join(__dirname,'index.html'),{
            array:datas
    },function(error,content){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.end(content);
    });
});
//request deal response
/*server.on('request',(req,res)=>{
      if (req.url.includes('index.html') || req.url == '/') {
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
})*/

//start app
app.listen(3000,'127.0.0.1',(err)=>{
  if (err) {
    console.log(err)
  }
  console.log("start success");
})
