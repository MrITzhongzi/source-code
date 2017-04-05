'use strict'

const fs = require('fs')
const path = require('path')

//node 原生不支持GBK编码
/*fs.readFile(path.join(__dirname,'abc.txt'),'GBK',(err,data)=>{
    console.log(data);
})*/

//导入iconv-lite
const iconv = require('iconv-lite');

fs.readFile(path.join(__dirname,'abc.txt'),(err,data)=>{
    const str = iconv.decode(data, 'GBK');
    console.log(str);
})
