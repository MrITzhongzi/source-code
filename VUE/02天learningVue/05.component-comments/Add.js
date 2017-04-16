/**
 * Add.js添加数据的组件
 */

var Add = {
  template: `
  <div style="padding:10px;background:#ea8729">
  <input type="text" v-model="name"/> <br />
  <textarea v-model="content"></textarea>
  <button @click="add">添加</button>
  </div>
  `,
  data:function () {
    return {
      name: '',
      content:''
    }
  },

  // this.mycomments = Box实例的mycomments
  props:['mycomments'],
  methods:{
    add:function () {
      // $('input').val()
      // 把数据添加到原来的数组中
      this.mycomments.push({
        id: Math.random(),
        nickname: this.name,
        content: this.content
      })
    }
  }
}