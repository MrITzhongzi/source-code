'use strict'

const fs = require('fs')
const path = require('path')

const dirPath = path.join(__dirname,'aaa')
//node提供了一种以相对路径折射成绝对路径的办法

//创建文件夹
/*fs.mkdir(dirPath,(err)=>{
  if (err) {
    console.log(err)
  }
  console.log("create dir success");
});*/

//判断文件夹/文件是否存在
/*fs.exists(dirPath,(exists)=>{
  if (!exists) {
    fs.mkdir(dirPath,(err)=>{
      if (err) {
        console.log(err)
      }
      console.log("create dir success");
    });
  }else{
    console.log("文件夹已经存在");
  }
})*/

//删除文件夹
/*fs.exists(dirPath,(exists)=>{
  if (exists) {//存在
      fs.rmdir(dirPath,(err)=>{
        if (err) {
          console.log(err);
        }
        console.log("rm dir sucesss");
      })
  }else{
    console.log("不存在该文件夹了");
  }
})*/
