

var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('someEvent', function () {
    console.log('listener1');
});

emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});

emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');