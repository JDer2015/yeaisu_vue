<template>
  <div class="footer" v-show="$route.meta.isShow">
    <div :class="{on:'/home' === $route.path }" @click="goTo('/home')">
      <i></i>
      <span>首页</span>
    </div>
    <div :class="{on:'/shiWu' === $route.path }" @click="goTo('/shiWu')">
      <i></i>
      <span>识物</span>
    </div>
    <div :class="{on:$route.path.includes('/category') }" @click="goTo('/category')">
      <i></i>
      <span>分类</span>
    </div>
    <div :class="{on:'/shopCar' === $route.path }" @click="goTo('/shopCar')">
      <i></i>
      <span>购物车</span>
    </div>
    <div :class="{on:'/profile' === $route.path }" @click="goTo('/profile')">
      <i></i>
      <span>个人</span>
    </div>
  </div>
</template>

<script>

  export default {
    methods:{
      goTo(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../static/less/mixin";
  .footer{
    .top-border-1px();
    width:100%;
    height:98px;
    background-color: #fafafa;
    position: fixed;
    left:0;
    bottom:0;
    z-index: 10;
    display: flex;
    justify-content: space-around;
    align-content: space-around;
    div{
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
      i{
        width:40px;
        height:40px;
        display: inline-block;
        background-image: url('/static/img/footer/bg.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 -250px;
      }
      span{
        font-size: 20px;
        color:#666;
      }
      &:nth-of-type(2){
        i{
          background-position: 0 -350px;
        }
      }
      &:nth-of-type(3){
        i{
          background-position: 0 -140px;
        }
      }
      &:nth-of-type(4){
        i{
          background-position: 0 -50px;
        }
      }
      &:nth-of-type(5){
        i{
          background-position: 0 -450px;
        }
      }
    }
    .on{
      &>span{
        color:#b4282d;
      }
      &:nth-of-type(1){
        i{
          background-position: 0 -200px;
        }
      }
      &:nth-of-type(2){
        i{
          background-position: 0 -300px;
        }
      }
      &:nth-of-type(3){
        i{
          background-position: 0 -90px;
        }
      }
      &:nth-of-type(4){
        i{
          background-position: 0 0;
        }
      }
      &:nth-of-type(5){
        i{
          background-position: 0 -400px;
        }
      }
    }
  }
</style>
