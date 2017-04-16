/**
 * 盒子组件,只是做个包裹
 */

// var data = {
//   name: 1
// }

 var Box = {
  template: `<div style="padding:10px;background:#f53e3e">
  {{list}}
  <br />
  {{name}}
  <Add 
  :mylist="list"
  xxx = "嘻嘻"
  yyy = "呵呵"
  ></Add>
  </div>`,

  // 当我们使用这个组件时，vue在最开始会执行这个data函数,
  // 得到的返回值就和之前new Vue中的data是类似的
  data: function () {
    // var obj = {name:1}
    // return obj
    return {
        name:'小明',

        // 要把数据传给Add组件
        list:[
        {id:1,age:18,name:'小明',che:'宝马'},
        {id:2,age:18,name:'小华',che:'QQ'},
        {id:3,age:18,name:'小月',che:'五菱宏光'},
        {id:4,age:18,name:'小梅',che:'xxx'},
        {id:5,age:27,name:'马冬梅',che:'永久牌'},
        ]
      }
  },

  components:{
    Add
  }
 }