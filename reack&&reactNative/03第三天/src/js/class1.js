class Person {
    // 构造函数，每当new这个类的时候，就会先执行constructor构造函数，走构造函数内部所有的代码
    constructor(age,gender){
        // 实例属性
        this.age = age;
        this.gender = gender;
    }

    // 这是静态属性
    static username = 'zs'

    // 定义了一个实例方法,通过new出来的实例来访问
    sayHello(){
        console.log('大家好，我今年'+this.age+'了');
    }
    // 定义了一个静态方法，通过类名直接访问，不能通过实例对象访问
    static wangwang(){
        console.log('我是小明，我新get了一个技能，汪汪~~~求包养，会暖床');
    }
}


// 定义中国人的类
class Chinese extends Person{
    // 注意：前提：实现了继承；；；；如果子类内部没有提供constructor构造函数，默认，会隐式的有一个构造函数；默认子类就有一个constructor构造函数；
    // 当我们显示定义构造函数的时候，会把默认构造函数给覆盖掉！！！

    constructor(){
        super();
        this.skin = 'yellow'
    }
}

class American extends Person{
    constructor(){
        super();
        this.skin = 'white'
        this.eyeColor='white'
    }
}


// 导出当前的类
export default Chinese;