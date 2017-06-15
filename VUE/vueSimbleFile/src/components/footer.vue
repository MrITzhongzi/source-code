<template>
    <div class="footer" @mouseover="testMouseOver">
        <p>{{msg}}</p>
    </div>
</template>

<style>
    .footer {
        border: 3px solid blue;
    }
</style>

<script>
    export default {
        data : function () {
            return {
                msg : "这是底部"
            }
        },
        methods : {
            testMouseOver : function () {
                console.log("鼠标经过");
            }
        }
    }
</script>