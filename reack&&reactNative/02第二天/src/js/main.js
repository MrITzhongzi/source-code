// 1. 导入jquery模块
import $ from 'jquery'

// 2. 导入样式表
import '../css/app.css'
import '../css/index.scss'

// 2. 奇数行一个颜色 :odd
$('#ulList>li:odd').css('backgroundColor','lightblue');

// 3. 偶数行一个颜色 :even
$('#ulList>li:even').css('backgroundColor','blue');

// ES6语法中的class，是实现面向对象的一种方式
// prototype

// 定义了一个Person类
class Person{
    // 静态属性
    static username = 'zs'
    static age = 20
}

console.log(Person.username);
console.log(Person.age);


// function Person(){
//     this.title = '大新闻'
// }

// var p1 = new Person();
// p1.title

// // 静态属性【可以直接通过类，来访问的属性，而不是通过类的实例来访问的属性】
// Person.username = '';
// Person.age = 20;