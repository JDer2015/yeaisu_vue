<template>
  <div class="cover">
    <img src="./cover/home1.jpg">
    <img src="./cover/home2.jpg">
    <img src="./cover/home3.jpg">
    <div></div>
    <a @click="$router.replace('/home')"></a>
  </div>
</template>

<script>

  export default {}
</script>

<style lang="less" scoped>
  .cover{
    width: 100%;
    font-size: 0;
    img{
      width:100%;
      &:nth-of-type(1){
        height:386px;
      }
      &:nth-of-type(2){
        height:327px;
      }
      &:nth-of-type(3){
        height:432px;
      }
    }
    a{
      display: block;
      position: absolute;
      width: 300px;
      height:40px;
      left: 230px;
      bottom:368px;
    }
    div{
      width:100%;
      height:205px;
      background-color: #eee;
    }
  }
</style>
