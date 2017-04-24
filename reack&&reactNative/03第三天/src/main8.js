// 1. 导入React相关的包
import React from 'react'
import ReactDOM from 'react-dom'

// 导入评论列表组件
import CommentList from './components/CommentList.js'

// 将虚拟DOM，挂载到页面的容器中
ReactDOM.render(<div>
    <CommentList></CommentList>
</div>, document.getElementById('app'));