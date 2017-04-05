'use strict'

/**
 *
 * 文件夹不存在必须要由我们程序员自己创建
 *
 * 文件不存在，你只需要调用对应的方法往文件中写内容即可，如果当发现该文件不存会自动帮我们创建
 * 
 */
 const fs = require('fs')
 const path = require('path')

//const filePath = path.join(__dirname,'123.txt')

/**
 * 以覆盖的方式写入的
 */
/*fs.writeFile(filePath,'红豆生南国',(err)=>{
  if (err) {
    console.log(err);
  }
  console.log("write OK");
})*/

/**
 * 已追加的方式来写入
 */
/*fs.appendFile(filePath,'\r\n春来发几枝',(err)=>{
  if (err) {
    console.log(err);
  }
  console.log("write OK");
})*/

/**
 *需求:往abc文件夹下面的abc.txt里面写入一句话  "i am a good man"
 */
 const dirPath = path.join(__dirname,"abc");
 const filePath = path.join(__dirname,"abc/abc.txt");

 const newFilePath = path.join(__dirname,"abc/123.txt");

//判断文件夹是否存在，并且往里面写内容
/* fs.exists(dirPath,(exists)=>{
  if (!exists) { 
    //创建文件夹
    fs.mkdir(dirPath,(err)=>{
      if (err) {
        console.log(err);
      }
      console.log("create dir sucesss")
    })
  }

  //在文件夹已经存在的情况下，往abc/abc.txt追加写入内容
  fs.appendFile(filePath,"\r\n how are you",(err)=>{
    if (err) {
      console.log(err);
    }
    console.log("write OK");
  })
})*/

//重命名文件
/*fs.rename(filePath,newFilePath,(err)=>{
  if (err) {
    console.log(err);
  }
  console.log("rename file success!")
})*/

//删除文件
/*fs.exists(newFilePath,(exists)=>{
  if (exists) {
    //删除文件用unlink
    fs.unlink(newFilePath,(err)=>{
      if (err) {
        console.log(err)
      }
      console.log("unlink sucesss")
    })
  }else{
    console.log("文件已经不存在了");
  }
})*/

//监控文件的改变
fs.watchFile(filePath, (curr, prev) => {
  console.log(curr)
  console.log(prev)
  console.log(`the current mtime is: ${curr.mtime}`);
  console.log(`the previous mtime was: ${prev.mtime}`);
});
