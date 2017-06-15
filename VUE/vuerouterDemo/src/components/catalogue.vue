<template>
    <div class="catalogue">
        <ul>
            <li><router-link to="/film">电影</router-link></li>
            <li><router-link to="/fruit">水果</router-link></li>
            <li><router-link to="/equipment">电子设备</router-link></li>
            <li><router-link to="/dropOut">退出登录</router-link></li>
        </ul>
    </div>
</template>

<style>
    .catalogue {
        height: 100%;
        background-color: #3ea8dd;
        width: 15%;
    }
    .catalogue ul {
        padding-top: 40px;
        text-align: right;
        padding-right: 20px;
    }
    .catalogue ul, li {
        list-style: none;
        margin: 10px auto;
    }
    .catalogue ul li {

    }
    .catalogue ul li a {
        color: #000;
        font-size: 30px;
        text-decoration: none;
    }

</style>

<script>

    export default {
        data : function () {
            return {

            }
        },
        methonds : {

        }
    }
</script>