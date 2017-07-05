const util = require('util');

var Base = function () {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
        console.log('Hello ' + this.name);
    };
}

Base.prototype.showName = function () {
    console.log(this.name);
}

var Sub = function () {
    this.name = "sub";
};

util.inherits(Sub, Base);

let baseObj = new Base();
baseObj.sayHello();
baseObj.showName();

console.log(baseObj);

let SubObj = new Sub();
SubObj.showName();
// SubObj.sayHello();

console.log(SubObj);


console.log(util.inspect(SubObj));
console.log(util.inspect(baseObj,true));



