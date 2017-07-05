
const fs = require('fs');

/*
let data = fs.readFileSync('input.txt');

console.log(data.toString());

console.log('程序运行结束');*/

fs.readFile('input.txt',function (err, data) {
    if(err){
        return console.log(err);
    }
    console.log(data.toString());
    console.log('程序运行结束');
})