'use strict'

const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.zip'));

console.log('文件压缩完成')