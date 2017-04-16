/**
 * 盒子组件，里面有数据
 */

var Box = {

  // template作用: 
  // 当我们在别的地方,以标签形式使用了这个组件,
  // 那个标签会被替换为这个template中的内容

  template: `
  <div style="padding:20px;background:#ef2f2f">

  // 最终这个Add会被替换为Add组件中的template的值!
  // 在替换时还会做一件事件，替换时，vue会查看Add组件有没有props属性
  // 假如有这个属性,vue会遍历这个属性(是个数组),vue会根据数组中的每一个值
  // 去看Add这个标签上有没有相同名字的值
  // 如果有相同名字的值, vue会读取它对应的数据，把这个数据赋值给了Add组件的实例

  <Add :mycomments="comments"></Add>

  // 1.写上子组件的标签，并设置属性
  <List :mycomments="comments"></List>
  </div>
  `,
  
  // data作用: 提供数据
  // *注意*,data提供的数据是给当前data所在对象的template属性用的
  // 组件中的data必需是个函数，然后必需返回一个对象
  data: function () {
    return {
      comments:[
      {id:1,nickname:'小明',content:'衣服很不错!'},
      {id:2,nickname:'小月',content:'衣服真的很不错!'},
      {id:3,nickname:'小梅',content:'衣服确实很不错!'},
      {id:4,nickname:'小红',content:'鞋子也结实'}
      ]
    }
  },

  // 起个名字
  components:{
    List,
    Add
  }
}