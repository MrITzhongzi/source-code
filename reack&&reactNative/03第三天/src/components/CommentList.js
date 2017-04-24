import React from 'react'
import Comment from './Comment'

// 2. 使用class创建一个评论列表组件
export default class CommentList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [
                { user: '张三', content: '哈哈，沙发',age:888 },
                { user: '张三2', content: '哈哈，板凳' },
                { user: '张三3', content: '哈哈，凉席' },
                { user: '张三4', content: '哈哈，砖头' },
                { user: '张三5', content: '哈哈，楼下山炮' }
            ]
        }
    }

    // 循环遍历每一条评论数据，并创建li元素，将这些li存储为一个数组，并返回
    createComment() {
        // 使用map方法，对数组中的每一项，都进行一个函数操作，并返回一个新数组
        return this.state.comments.map((item, i)=>{
            /*return <Comment
                content={item.content}
                user={item.user}
                key={i}
            ></Comment>*/

            // {...item}这种语法叫做"属性扩散"
            return <Comment {...item} key={i}></Comment>
        });
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