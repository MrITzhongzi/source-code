/**
 * 左边
 */

const Left = {
  template: `
  <div style="background:#f74747;position:fixed;left:0;top:0;width:150px;bottom:0;">
  <ul>
  <li><router-link :to="{name:'home'}">Home页</router-link></li>
  <li><router-link :to="{name:'tec'}">讲师管理页</router-link></li></ul>
  </div>
 `
}