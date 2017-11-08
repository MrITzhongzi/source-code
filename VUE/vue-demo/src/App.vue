<template>
  <div>
      <h4 @click="clickh4">我是一个h4</h4>
      <p @click="clickp">我是一个p标签</p>
  </div>
</template>
<style scoped>
h4 {
    text-align: center;
    color: red;
}
p {
    font-size: 18px;
    color: #000;
}
</style>
<script>
    export default {
        created(){
            alert("created")
        },
        data (){
            return {
                name: "lhw",
                age: 18
            }
        },
        methods: {
            clickh4(){
                alert('click h4')
            },
            clickp(){
                alert('p')
            }
        }
    }
</script>

