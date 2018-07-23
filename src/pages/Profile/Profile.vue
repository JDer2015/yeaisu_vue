<template>
  <div class="profile">
    <Header/>
    <div class="profile_logo">
      <img src="/static/img/profile/img1.png">
    </div>
    <div class="profile_login">
       <span><i></i>手机号码登录</span>
       <span><i></i>邮箱帐号登录</span>
       <a>手机号快捷注册&nbsp;></a>
    </div>
    <div class="profile_foot">
      <span><i></i>微信</span>
      <span>|</span>
      <span><i></i>QQ</span>
      <span>|</span>
      <span><i></i>微博</span>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header/Header.vue'
  export default {
    components:{
      Header
    }
  }
</script>

<style lang="less">
.profile{
  width:100%;
  overflow: hidden;
  .profile_logo{
    width:100%;
    height:510px;
    text-align: center;
    line-height: 510px;
    padding-top:88px;
    img{
      width:268px;
      height:90px;
    }
  }
  .profile_login{
    width:100%;
    height:290px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 205px;
    span{
      &:nth-of-type(1),&:nth-of-type(2){
        width: 670px;
        height:92px;
        display: inline-block;
        line-height: 92px;
        text-align: center;
        border-radius: 5px;
      }
      &:nth-of-type(1){
        background-color: #b4282d;
        color: white;
        i{
          display: inline-block;
          width: 41px;
          height:41px;
          margin-bottom: 10px;
          margin-right: 10px;
          vertical-align: middle;
          background-image: url("/static/img/profile/bg1.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 0 -48px;
        }
      }
      &:nth-of-type(2){
        color: #b4282d;
        border:2px solid #b4282d;
        i{
          display: inline-block;
          width: 41px;
          height:41px;
          margin-bottom: 10px;
          margin-right: 10px;
          vertical-align: middle;
          background-image: url("/static/img/profile/bg1.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 0 0;
        }
      }
    }
  }
  .profile_foot{
    width:100%;
    height:260px;
    display: flex;
    padding:0 100px;
    box-sizing: border-box;
    justify-content: space-around;
    line-height: 260px;
    padding-top:50px;
    span{
      i{
        width: 40px;
        height:40px;
        display: inline-block;
        background-image: url("/static/img/profile/bg1.png");
        background-size: cover;
        background-repeat: no-repeat;
        vertical-align: middle;
        margin-right: 10px;
      }
      &:nth-of-type(1){
        i{
          background-position: 0 0;
        }
      }
      &:nth-of-type(3){
        i{
          background-position: 0 0;
        }
      }
      &:nth-of-type(5){
        i{
          background-position: 0 0;
        }
      }
    }
  }
}
</style>
