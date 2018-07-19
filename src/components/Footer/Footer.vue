<template>
  <div class="footer">
    <div class="on">
      <i></i>
      <span>首页</span>
    </div>
    <div>
      <i></i>
      <span>识物</span>
    </div>
    <div>
      <i></i>
      <span>分类</span>
    </div>
    <div>
      <i></i>
      <span>购物车</span>
    </div>
    <div>
      <i></i>
      <span>个人</span>
    </div>
  </div>
</template>

<script>

  export default {}
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
          background-position: 0 -150px;
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
          background-position: 0 -100px;
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
