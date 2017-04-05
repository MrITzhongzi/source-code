'use strict'

const fs = require('fs')
const path = require('path')

const sourceFile = path.join(__dirname,"abc/abc.txt")

const targetDir = path.join(__dirname,"ccc");
const targetFile = path.join(__dirname,"ccc/123.txt");

//1.监控源文件 abc/abc.txt
fs.watchFile(sourceFile,(curr,prev)=>{
    //创建目标文件夹
    fs.exists(targetDir,(exists)=>{
      if (!exists) {
        fs.mkdir(targetDir,(err)=>{
          if (err) {
            console.log(err);
          }
          console.log("create targetDir success");
        })
      }
    })

    //拷贝  将源文件的内容读取到REPL中，然后再REPL中内容以覆盖的方式写入到目标文件中
    fs.readFile(sourceFile,(err,data)=>{
      if (err) {
        console.log(err)
      }

      //将读到的data,直接覆盖写入到ccc/123.txt
      fs.writeFile(targetFile,data,(err)=>{
        if (err) {
          console.log(err)
        }
        console.log("完成拷贝");
      })
    })
})
