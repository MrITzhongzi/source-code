// 1. 导入React相关的包
import React from 'react'
import ReactDOM from 'react-dom'

// 使用function构造函数，创建无状态的组件
function Comment(props) {
    return <li>
        <h3>评论内容：{props.content}</h3>
        <p>评论人：{props.user}</p>
    </li>
}

// 2. 使用class创建一个评论列表组件
class CommentList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [
                { user: '张三', content: '哈哈，沙发' },
                { user: '张三2', content: '哈哈，板凳' },
                { user: '张三3', content: '哈哈，凉席' },
                { user: '张三4', content: '哈哈，砖头' },
                { user: '张三5', content: '哈哈，楼下山炮' }
            ]
        }
    }

    // 循环遍历每一条评论数据，并创建li元素，将这些li存储为一个数组，并返回
    createComment() {
        var list = [];
        for (var i = 0; i < this.state.comments.length; i++) {
            // 在这时候，就不用手动创建DOM结构了，只需要引入现成的Comment组件，将评论数据传递给这个组件，即可
            var li = <Comment
                content={this.state.comments[i].content}
                user={this.state.comments[i].user}
                key={i}
            ></Comment>
            list.push(li);
        }
        return list;
    }

    render() {
        return <div>
            {/*调用当前组件身上的createComment()方法，得到创建的评论数组*/}
            <ul>
                {this.createComment()}
            </ul>
        </div>
    }
}


// 3. 将虚拟DOM，挂载到页面的容器中
ReactDOM.render(<div>
    <CommentList></CommentList>
</div>, document.getElementById('app'));