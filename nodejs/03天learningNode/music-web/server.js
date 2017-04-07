'use strict'

const http = require('http')
const path = require('path')
const fs = require('fs')
const xtpl = require('xtpl')
const querystring = require('querystring')

const musics = require(path.join(__dirname,'musics.json'))

const server = http.createServer();

server.on('request',(req,res)=>{
  let urlString = req.url;
  if (urlString=='/' || urlString.includes('list.html')) {
      //使用xtpl，利用数据去动态替换 list.html中的占位符，然后生成一个完整的html
      xtpl.renderFile(path.join(__dirname,'list.html'),{
        musics:musics
      },(err,content)=>{
        res.setHeader("Content-Type","text/html;charset=utf-8")
        res.end(content);
      })
  }else if(urlString.includes('site.css')){
      fs.readFile(path.join(__dirname,'statics/css/site.css'),(err,data)=>{
        res.setHeader("Content-Type","text/css;charset=utf8")
        res.end(data);
      })
  }else if(urlString.includes('jquery.min.js')){
      fs.readFile(path.join(__dirname,'statics/js/jquery.min.js'),(err,data)=>{
        res.setHeader("Content-Type","text/javascript;charset=utf8")
        res.end(data);
      })
  }else if(urlString.includes('.mp3')){
     //       /statics/musics/1.mp3
     //       url解码
      urlString = querystring.unescape(urlString);
      console.log(urlString);

     fs.readFile(path.join(__dirname,urlString),(err,data)=>{
        res.setHeader("Content-Type","audio/mpeg;charset=utf8")
        res.end(data);
     })
  }
})
//start server
server.listen(3000,'127.0.0.1',(err)=>{
  console.log("start success");
  
  console.log(module.paths);
});
