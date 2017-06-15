<template>
    <div class="main">
        <catalogue></catalogue>
        <detail></detail>
        <!--<film></film>-->
    </div>
</template>

<style>
    .main {
        height: 100%;
        display: flex;
    }
</style>

<script>
    import catalogue from './catalogue.vue';

    import detail from './detail.vue';
    import fruit from './fruitDetail.vue';
    import film from './film.vue'

//    console.log(film)

   /* const routes = [
        {path: '/film', component: "<div>电影</div>"},
        {path: '/fruit', component: "<div>水果</div>"},
        {path: '/equipment', component: "<div>电子设备</div>"},
        {path: '/dropOut', component: "<div>退出登录</div>"}
    ];*/

    export default {
        data : function () {
            return {

            }
        },
        components : {
            catalogue,
            detail,
            fruit,
            film
        },
    }
</script>