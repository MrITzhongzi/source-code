'use strict'

import '../style/style.less';

import main from '../components/main.vue';

import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router';

import detail from '../components/detail.vue';
import film from '../components/film.vue';

console.log(film)

const routes = [
    {path: '/film', component: film},
    {path: '/fruit', component: detail},
    {path: '/equipment', component: {template : "<div>电子设备</div>"}},
    {path: '/dropOut', component: {template : "<div>退出登录</div>"}},
];

const router = new VueRouter({
    routes
});

Vue.use(VueRouter);


var vm = new Vue({
    el: '#app',
    render: h => h(main),
    router
});