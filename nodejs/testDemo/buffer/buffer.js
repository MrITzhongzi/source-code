'use strict'

const buf = new Buffer(256);
const len = buf.write('hello jesus');

const newStr = buf.toString('utf8', 0, 5)

console.log('原来的' + len);

console.log('现在的' + newStr);


var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 内容: " + buffer3.toString());

var buffer1 = new Buffer('ABC');
// 拷贝一个缓冲区
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

var buffer4 = new Buffer('runoob');
// 剪切缓冲区
var buffer5 = buffer4.slice(0,2);
console.log("buffer2 content: " + buffer5.toString());
