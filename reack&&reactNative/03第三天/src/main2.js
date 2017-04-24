// 引包
import React from 'react'
import ReactDOM from 'react-dom'

// 引入外部定义的组件
import Hello2 from './components/Hello.js'

// 2. 创建组件,使用function构造函数的形式，创建基本的组件
function Hello(props){
    // return null;
    return <div>
        <div>这是Hello组件</div>
        <h1>这是大大的H1标签，我大，我骄傲！！！</h1>
        <h3>姓名：{props.username}----年龄是：{props.age}</h3>
    </div>
}

// var divObj = React.createElement()

// 3. 把组件渲染到页面上
ReactDOM.render(<div>
    {/*往子组件内部通过props传递一些数据进去*/}
<Hello username="zs" age={20}></Hello>
<Hello2></Hello2>
</div>, document.getElementById('app'));