'use strict'

const fs = require('fs');

const readStream = fs.createReadStream('input.txt');

const writeStream = fs.createWriteStream('output2.txt');

readStream.pipe(writeStream);

console.log('文件内容复制完毕');