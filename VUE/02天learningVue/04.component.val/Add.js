/**
 * 用来添加数据的组件
 */

var Add = {
  template: `<div style="background:#4379d8">
  {{xxx}}
  我是添加数据的组件: 
  {{mylist}}
  // <br />
  <button @click="changeList">改变mylist</button>
  </div>`,
  // 第2步，要在子组件中添加一个props属性，当前组件可以得到
  // mylist和xxx这两个属性对应的值
  props:['mylist','xxx'],
  methods:{
    changeList:function () {
      // 改变mylist中的值
      // this.mylist
      // console.log(this)
      // this.mylist = '小明明'
      this.mylist[0].name = '小黑'
    }
  }
}