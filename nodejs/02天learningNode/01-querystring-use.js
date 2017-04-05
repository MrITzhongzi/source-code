'use strict'

//1.导入模块/包
const http = require('http')
const url = require('url')
const querystring = require('querystring')

//2.创建web服务
const server = http.createServer();

//3.请求、处理、响应
//GET请求
/*server.on('request',(req,res)=>{
      const urlString = req.url;
      if (!urlString.includes('/favicon.ico')) {
           //1.获取到login?username=zhangsan&pwd=123
           const urlObj = url.parse(urlString);
           
           //2.将获取到的GET的键值对的字符串,转成js对象,方便操作
           //'username=zhangsan&password=123'
           const paramsObj =querystring.parse(urlObj.query);
           console.log(paramsObj);   
      }

      res.end("返回给你，好了");
})*/

//POST请求
server.on('request',(req,res)=>{
    //?怎么在服务端，接收浏览器通过POST请求方式传递过来的数据
    //代表只要浏览器通过POST请求给我传递过来数据，我就会执行
    //没传递一次我就会执行，data对应的函数一次，并且将浏览器传输过来的二进制数据
    //传递给我们的data事件对应的函数
    let body = ''
    req.on('data',(chunk)=>{
      //console.log(chunk.toString());
      body+=chunk;
    })

    req.on('end',()=>{
      //console.log('end '+body);
      //利用querystring 将POST传递过来的键值对字符串转成js对象
      const paramsObj = querystring.parse(body);
      console.log(paramsObj);
    })

    res.end("POST 。。。");
})

//4.开启web服务,启动监听
server.listen(3000,'127.0.0.1',(err)=>{
    if (err) {
      console.log(err);
    }
    console.log("start server OK");
})
