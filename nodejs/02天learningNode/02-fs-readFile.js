'use strict'

//1.导入模块/包
const http = require('http')
const fs = require('fs')

//2.创建web服务
const server = http.createServer();

//3.请求、处理、响应
//GET请求
server.on('request',(req,res)=>{
      const urlString = req.url;
      if (urlString.includes('index.html')) {
             //这个我们知道浏览器要我们的index.html
             //1.我们服务器去某个路径下找到index.html
             //2.读取进REPL环境中
             //3.对读取进来的index.html做处理(填充数据) 【可选】
             //4.将整好的html返回给浏览器去展示
             fs.readFile('./index.html','utf8' ,(err,data) => {
              if (err) throw err;
              console.log(data);

              res.end(data);
            });
      }
})

//4.开启web服务,启动监听
server.listen(3000,'192.168.18.104',(err)=>{
    if (err) {
      console.log(err);
    }
    console.log("start server OK");
})
