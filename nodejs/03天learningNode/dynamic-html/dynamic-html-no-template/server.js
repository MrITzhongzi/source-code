'use strict'

const http = require('http')
const fs = require('fs')
const path = require('path')

const datas = require(path.join(__dirname,'datas.json'))

//create server
const server = http.createServer();

//request deal response
server.on('request',(req,res)=>{
      if (req.url.includes('index.html') || req.url == '/') {
          fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
            if (err) {
              console.log(err)
            }

            //1.获取为替换之前所有的网页内容
            let htmlContent = data.toString();

            //2.去获取数据,遍历生成 需要html部分
            /*
              <ul>
                  <li>2</li>
                  <li>5</li>
                  <li>8</li>
                <ul>
             */
            let lisHTML = '<ul>'
            for(var i=0;i<datas.length;i++){
                  lisHTML += '<li>'+datas[i]+'</li>'
            }
            lisHTML+='</ul>';

            //3.使用lisHTML 替换 index.html中的占位符 `${lis}`
            htmlContent = htmlContent.replace("${lis}",lisHTML);

            //4.返回
            res.setHeader("Content-Type","text/html;charset=utf-8");
            res.end(htmlContent);
          })
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
