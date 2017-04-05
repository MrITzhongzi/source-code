'use strict'

const fs = require('fs')
const path = require('path')

// join 将多个路径拼接成一个路径
// 此刻 __dirname ==>  C:\Users\huangwei\Desktop\NodeJS\02-Node基础-第2天-模块化基础、自定义模块、第三方模块\4-源代码
// 
// filePath ==>  C:\Users\huangwei\Desktop\NodeJS\02-Node基础-第2天-模块化基础、自定义模块、第三方模块\4-源代码\123.txt
const filePath = path.join(__dirname,'123.txt');

/**
 * 异步的方式读取
 */
/*fs.readFile(filePath,(err,data)=>{
  console.log(data.toString());
})

console.log(111)*/

/**
 * 同步的方式读取
 */
/*const content = fs.readFileSync(filePath)
console.log(content.toString())

console.log(222)
*/

function add(x,y){
  return x + y;
}
