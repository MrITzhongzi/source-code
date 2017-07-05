'use strict'

const fs = require('fs');
let data = '';
let output = 'hello 写入文件';

let readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');

let i = 0;

readerStream.on('data',(chunk)=>{
    data += chunk;
    console.log(++i);
    console.log(data)
});

readerStream.on('end',()=>{
    console.log(data)
});

readerStream.on('error',(err)=>{
    console.log(err.stack);
});

console.log('读取文件完毕');

let writeStream = fs.createWriteStream('output.txt');
writeStream.write(output,'UTF8');
writeStream.end();

writeStream.on('finish',()=>{
    console.log('写入完成');
});

writeStream.on('error',(err)=>{
    console.log(err.stack);
});

console.log('程序写入完毕');

console.log('程序执行完成');