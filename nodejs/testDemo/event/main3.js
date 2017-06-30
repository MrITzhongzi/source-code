
    'use strict'

const events = require('events');

const eventEmitter = new events.EventEmitter();

const listener1 = () => {
    console.log('监听器1');
}

const listener2 = ()=> {
    console.log('监听器2')

}

eventEmitter.on('connection',listener1);

eventEmitter.on('connection',listener2);

let eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');

console.log(eventListeners + "个监听器监听连接事件");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
console.log('listeners 1 的事件不再受监听');

eventEmitter.emit('connection');

eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + '个监听器监听连接事件');

console.log('程序执行完毕');