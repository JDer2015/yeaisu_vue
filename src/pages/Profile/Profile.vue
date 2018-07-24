<template>
  <div class="profile">
    <Header/>
    <div class="profile_content" :class="{on:!flag}">
      <div class="profile_logo">
        <img src="/static/img/profile/img1.png">
      </div>
      <div class="profile_login">
        <span @click="goLogin"><i></i>手机号码登录</span>
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

    <div class="profile_loginPhone" :class="{on:flag}">
      <div class="profile_loginPhone_imgCon">
        <img src="/static/img/profile/img1.png">
      </div>
      <div class="profile_loginPhone_middle">
        <div class="phone">
          <input type="tel" maxlength="11" placeholder="请输入手机号" v-model="phone">
        </div>
        <div class="captcha">
          <input type="tel" maxlength="6" placeholder="请输入验证码" v-model="captcha">
          <span @click="sendCaptcha">{{computeTime>0 ? `已发送${computeTime}s` : '获取验证码'}}</span>
        </div>
        <div class="others">
          <span>遇到问题？</span>
          <span>使用密码验证登录</span>
        </div>
      </div>
      <div class="profile_loginPhone_foot">
        <span @click="login">登录</span>
        <span @click="goProfile">其他登录方式</span>
        <a>注册账号&nbsp;></a>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header/Header.vue'
  import { Toast } from 'mint-ui';
  export default {
    data(){
      return{
        phone:'',
        captcha:'',
        computeTime:0,
        flag:true
      }
    },
    methods:{
      goLogin(){
        this.flag = false
      },
      goProfile(){
        this.flag = true
      },
      sendCaptcha(){
        if(!this.isShow){
          Toast({
            message: '请输入正确的手机号',
            position: 'middle',
            duration: 3000
          })
        }
        if(this.isShow  && this.computeTime === 0){
          this.computeTime = 30
          const intervalId = setInterval(() => {
            this.computeTime--
            if(this.computeTime<=0){
              this.computeTime = 0
              clearInterval(intervalId)
            }
          },1000)
        }
      },
      login(){
        const {phone,captcha} = this
        if(this.isShow){
          Toast({
            message: '登陆成功',
            position: 'middle',
            duration: 3000
          })
        }
      }
    },
    components:{
      Header
    },
    computed:{
      isShow(){
        return /^(130-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(this.phone)
      }
    }
  }
</script>

<style lang="less">
  .profile{
    width:100%;
    overflow: hidden;
    .profile_content{
      &.on{
        display: none;
      }
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

    .profile_loginPhone{
      &.on{
        display: none;
      }
      background-color: white;
      overflow: hidden;
      .profile_loginPhone_imgCon{
        width:100%;
        height:62px;
        margin-top:145px;
        text-align: center;
        img{
          width:192px;
          height:62px;
        }
      }
      .profile_loginPhone_middle{
        width:100%;
        text-align: center;
        &>div{
          margin-top:92px;
          width:80%;
          height:92px;
          display: inline-block;
        }
        .phone{
          border-bottom:1px solid #666;
          input{
            width:100%;
            height:100%;
            outline: none;
          }
        }
        .captcha{
          border-bottom:1px solid #eee;
          input{
            width:60%;
            height:100%;
            float:left;
            outline: none;
          }
          span{
            float:right;
            margin-right:10px;
            margin-top:20px;
            border:2px solid #666;
            width:150px;
            height:50px;
            line-height: 50px;
            text-align: center;
            border-radius: 10px;
          }
        }
        .others{
          span{
            &:nth-of-type(1){
              float:left;
            }
            &:nth-of-type(2){
              float:right;
            }
          }
        }
      }
      .profile_loginPhone_foot{
        width:100%;
        height:300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        span{
          width:80%;
          height:92px;
          display: inline-block;
          text-align: center;
          line-height: 92px;
          font-size: 30px;
          color:white;
          background-color: #b4282d;
          border-radius: 10px;
          &:nth-of-type(2){
            color:#b4282d;
            background-color: white;
            border:2px solid #b4282d;
          }
        }
      }
    }
  }
</style>
