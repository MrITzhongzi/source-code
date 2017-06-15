<template >
    <div >
        <p>{{ greeting }}!</p>
    </div>
</template>

<script>
    module.exports = {
//        name : '#header',
        data : function () {
            return {
                greeting : 'this is header'
            }
        }
    }
</script>

<style scoped="scope">
    div {
        border: 5px solid green;
    }
    p{
        font-size: 2em;
        text-align: center;
        color : red;
        display: flex;
    }
</style>