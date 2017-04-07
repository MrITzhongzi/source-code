'use strict'

const path = require('path')

const calcObj = require(path.join(__dirname,'calc/calc.js'))

//使用
console.log("加法计算的结果: ",calcObj.addFunc(1,2))

console.log("减法计算的结果: ",calcObj.subStrictFunc(1,2))
