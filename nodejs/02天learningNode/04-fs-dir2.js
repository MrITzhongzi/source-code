'use strict'

const fs = require('fs')
const path = require('path')

const oldDirPath = path.join(__dirname,'aaa')
//node提供了一种以相对路径折射成绝对路径的办法

const newDirPath = path.join(__dirname,'bbb')

/**
 * rename既可以重命名文件夹,也可以重命名文件
 */
fs.rename(oldDirPath,newDirPath,(err)=>{
  if (err) {
    console.log(err);
  }
  console.log("rename success");
})


