<template>
  <div class="shopCar">
    <div class="shopCar_header">
      <span>购物车</span>
      <a>领券</a>
    </div>
    <div class="shopCar_content">
      <div class="shopCar_content_top">
        <span><i></i>30天退换无忧</span>
        <span><i></i>48小时快速退款</span>
        <span><i></i>满88元免邮费</span>
      </div>
      <div class="shopCar_content_img">
        <img src="/static/img/shopCar/img4.png">
      </div>
      <div class="shopCar_content_login">
        <span>去添加点什么吧</span>
        <p @click="$router.push('/login')">登录</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {}
</script>

<style lang="less">
  .shopCar{
    width:100%;
    .shopCar_header{
      width:100%;
      height:88px;
      padding:0 30px;
      box-sizing: border-box;
      background-color: white;
      line-height: 88px;
      text-align: center;
      span{
        font-size: 40px;
      }
      a{
        float:right;
        color:red;
      }
    }
    .shopCar_content{
      width:100%;
      height:1246px;
      .shopCar_content_top{
        width:100%;
        height:70px;
        padding:0 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        line-height: 70px;
        span{
          i{
            display: inline-block;
            width:10px;
            height:10px;
            background-color: white;
            border-radius: 50%;
            vertical-align: middle;
          }
        }
      }
      .shopCar_content_img{
        position: absolute;
        top:88px;
        left: 0;
        right:0;
        bottom: 0;
        margin: auto;
        width: 248px;
        height:248px;
        img{
          width: 100%;
          height:100%;
        }
      }
      .shopCar_content_login{
        width:100%;
        height:169px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 670px;
        p{
          width:480px;
          height:92px;
          font-size: 35px;
          color: white;
          background-color: #b4282d;
          text-align: center;
          line-height: 92px;
          border-radius: 5px;
        }
      }
    }
  }
</style>
