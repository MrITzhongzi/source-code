/**
 * List组件，用于展示评论内容的组件
 */

var List = {
  template:`
  <div style="padding:10px;background:#5899f1">
  <ul>
  <li v-for="item in mycomments">
  我叫{{item.nickname}} <br />
  我想说: {{item.content}}
  </li>
  </ul>
  </div>`,
  // 2.在子组件中要接收数据
  // this.mycomments 
  props:['mycomments']
}