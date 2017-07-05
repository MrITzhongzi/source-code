<template>
    <div>
        <h4>element ui 布局测试</h4>
        <layout></layout>
        <transition-fade></transition-fade>
        <color-ele></color-ele>
        <calc></calc>
        <select-el></select-el>
        <el-table></el-table>
        <al-alert></al-alert>
    </div>
</template>

<script>

    import layout from './components/layout.vue';
    import transitionFade from './components/transition-fade.vue';
    import colorEle from './components/ele-color.vue';
    import calc from './components/calc.vue';
    import selectEl from './components/select-el.vue';
    import elTable from './components/elTable.vue';
    import alAlert from './components/el-alert.vue';

    export default {
        data () {
            return {}
        },
        components : {
            layout,
            transitionFade,
            colorEle,
            calc,
            selectEl,
            elTable,
            alAlert
        }
    }
</script>

<style>

</style>
