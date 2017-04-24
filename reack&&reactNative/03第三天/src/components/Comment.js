import React from 'react'

// 导入样式
import '../css/comment.css'

// 使用function构造函数，创建无状态的组件
export default function Comment(props) {
    // 定义样式对象
    var styles = {border:'1px solid red', fontSize:'12px'}
    var styleH3 = {color:'blue'}

    var styleFather = {
        liStyle:{border:'1px solid red', fontSize:'12px'},
        h3Style:{color:'green'}
    }

    return <li style={styleFather.liStyle}>
        <h3 style={styleFather.h3Style}>评论内容：{props.content}</h3>
        <p className="pUser">评论人：{props.user}</p>
    </li>
}