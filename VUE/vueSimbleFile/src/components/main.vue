<template>
    <div class="main">
        <hello></hello>
        <mybody></mybody>
        <foot></foot>
    </div>
</template>

<style>
    html,body {
        height: 100%;
    }
    .main {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>

<script>
    import hello from '../components/hello.vue';
    import mybody from '../components/body.vue';
    import foot from '../components/footer.vue'

    export default {
        data : function () {
           return {

           }
        },
        components : {
            hello,
            mybody,
            foot
        }
    }
</script>