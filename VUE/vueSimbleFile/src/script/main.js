'use strict'

import '../style/style.less';

import main from '../components/main.vue';

import Vue from 'vue'

import '../style/test.css'

import '../style/test2.css'


var vm = new Vue({
    el : '#app',
    render: h => h(main)
});