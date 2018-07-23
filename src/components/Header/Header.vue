<template>
  <div class="header">
    <span class="home" @click="$router.replace('/home')"></span>
    <img src="/static/img/home/logo.png">
    <span class="car" @click="$router.replace('/shopCar')"></span>
    <span class="search" @click="$router.replace('/shiWu')"></span>
  </div>
</template>

<script>

  export default {}
</script>

<style lang="less" scoped>
  @import "../../../static/less/mixin";
  .header{
    .bottom-border-1px();
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:88px;
    background-color: #fafafa;
    text-align: center;
    z-index: 100;
    img{
      margin-top:20px;
      width:172px;
      height:54px;
    }
    .home{
      margin-left:20px;
      margin-top:20px;
      float:left;
      width:51px;
      height:51px;
      display: inline-block;
      background-image: url("/static/img/footer/bg.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 0 -320px;
    }
    .car{
      margin-right:20px;
      margin-top:20px;
      float:right;
      width:50px;
      height:50px;
      display: inline-block;
      background-image: url("/static/img/footer/bg.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 0 -60px;
    }
    .search{
      margin-right:40px;
      margin-top:25px;
      float:right;
      width:40px;
      height:40px;
      display: inline-block;
      background-image: url("/static/img/home/search.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
</style>
