<template>
    <div class="content" >
        <button @click="footfun">点击</button>
        <transition name="fade">
            <p v-if="show">{{msg}}</p>
        </transition>
    </div>
</template>

<style>
    .content {
        border: 3px solid red;
        flex-grow : 1;
        background: url("../assets/logo.png") center no-repeat;
        display: flex;
    }
    .content p{
        position: relative;
        top: 0;
        left: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>

<script>
    export default {
        data : function () {
            return {
                msg : "这是body",
                show : true　
            }
        },
        methods : {
            footfun : function () {
                this.show = !this.show;
            }
        }
    }
</script>