import '../../src/style/style.less'

import Vue from 'vue/dist/vue.js'
// import Vue from 'vue';  //这里引入的是  dist文件夹中的   dist/vue.common.js
import 'animate.css';

import '@tweenjs/tween.js'; //js过渡效果 插件

var animate1 = {
    template: '<article class="animateArticle">' +
    '<button v-on:click="show = !show">' +
    'Toggle' +
    '</button>' +
    '<transition name="fade">' +
    '<p v-if="show">hello</p>' +
    '</transition>' +
    '</article>',
    data: function () {
        return {
            show: true
        }
    }
}
var animate2 = {
    template: '<article class="animateArticle">' +
    '<button @click=" show = !show">' +
    'Toggle render' +
    '</button>' +
    '<transition name="slide-fade">' +
    '<p v-if="show">hello</p>' +
    '</transition>' +
    '</article>',
    data: function () {
        return {
            show: true
        }
    }
}

var animate3 = {
    template: '<article class="animateArticle">' +
    '<button @click="show = !show">Toggle show</button>' +
    '<transition name="bounce">' +
    '<p v-if="show">Look at me!</p>' +
    '</transition>' +
    '</article>',
    data: function () {
        return {
            show: true
        }
    }
}

//vue和第三方类库的组合
var animate4 = {
    template: '<article class="animateArticle">' +
    '<button @click="show = !show">' +
    'Toggle render' +
    '</button>' +
    '<transition name="custom-classes-transition" enter-active-class="animated hinge" leave-active-class="animated rollIn" >' +
    '<p v-if="show">hello</p>' +
    '</transition>' +
    '</article>',
    data: function () {
        return {
            show: true
        }
    }

}

/*var animate5 = {
    template: '<article class="animateArticle">' +
    '<input v-model.number="number" type="number" step="20">' +
    '<p>{{ animatedNumber }}</p>' +
    '</article>',
    data: function () {
        return {
            number: 0,
            animatedNumber: 0
        }
    },

}*/
import animate5 from './sub'

new Vue({
    el: '#app',
    data: {},
    components: {
        animate1,
        animate2,
        animate3,
        animate4,
        animate5
    },
    directives : {
        focus : {
            bind : function () {
              alert('初始化foucus指令')
            },
            inserted : function(el){
                // 聚焦元素
                el.focus()
            },
            uodate : function () {
                alert('更新focus指令')
            },
            componentUpdated : function () {

            }
         }
    },
    watch: {
        number: function (newValue, oldValue) {
            var vm = this

            function animate(time) {
                requestAnimationFrame(animate)
                TWEEN.update(time)
            }

            new TWEEN.Tween({tweeningNumber: oldValue})
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({tweeningNumber: newValue}, 500)
                .onUpdate(function () {
                    vm.animatedNumber = this.tweeningNumber.toFixed(0)
                })
                .start()
            animate();
        }
    }
})