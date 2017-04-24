import React from 'react'
import ReactDOM from 'react-dom'

// 使用class关键字创建组件，当使用extends实现React.Component的时候，就表明，你是一个子组件了
class ChaoHua extends React.Component{
    constructor(props){
        // 在调用父类构造函数的时候，把props也给他传递进去
        super(props);
        // 在构造函数内部创建一个state属性,这个state属性中的值，都是可读可写的！
        this.state = {
            userage:0
        }
    }

    // 在组件内部，必须有render放方法，作用是帮我们创建一颗DOM树
    render(){
        this.state.userage = 1;
        // this.props.age = this.props.age+'2';
        // 在render函数内部，必须返回一个null或者合法的JSX虚拟DOM
        return <div>我是{this.props.username}，呼叫土豆，听到请回答！！</div>;
    }
}

// 到入Hello组件
import Hello from './components/Hello'

ReactDOM.render(<div>
    {/*这是使用function构造函数常见的组件*/}
    <Hello username="hello"></Hello>
    {/*使用class创建的组件*/}
    <ChaoHua username="小黄" age="17"></ChaoHua>
</div>,document.getElementById('app'));