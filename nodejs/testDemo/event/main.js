
    'use strict'

const events = require('events');

const eventEmitter = new events.EventEmitter();

let connectHandler = () => {
    console.log('连接成功');

    eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',()=>{
    console.log('数据接收成功');
});

eventEmitter.emit('connection');

console.log('程序运行结束');