<template>
  <div class="home_secKill">
    <div class="home_secKill_left">
      <p>严选限时购</p>
      <div>
        <span>03</span><span>:</span><span>47</span><span>:</span><span>59</span>
      </div>
      <p>下一场18:00开始</p>
    </div>
    <div class="home_secKill_right">
      <img src="/static/img/home/content/bg4.png"></img>
      <div>
        <span>￥60</span>
        <span>￥60</span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {}
</script>

<style lang="less">
  @import "../../../static/less/mixin";
  .home_secKill{
    width:100%;
    height:380px;
    display: flex;
    margin-top:20px;
    justify-content: space-around;
    padding:30px 0;
    box-sizing: border-box;
    background-color: white;
    margin-bottom:20px;
    .home_secKill_left{
      width:335px;
      height:320px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      padding-top:60px;
      padding-left:20px;
      padding-bottom:40px;
      box-sizing: border-box;
      p{
        &:nth-of-type(1){
          font-size: 40px;
        }
      }
      div{
        display: flex;
        justify-content: space-around;
        span{
          display: inline-block;
          text-align: center;
          font-size: 40px;
          &:nth-of-type(1),&:nth-of-type(3),&:nth-of-type(5){
            width:62px;
            height:56px;
            background-color: #444;
            line-height: 56px;
            color:white;
          }
        }
      }
    }
    .home_secKill_right{
      position: relative;
      width:320px;
      height:320px;
      img{
        width:100%;
        height:100%;
      }
      div{
        position: absolute;
        right:20px;
        bottom:30px;
        width:96px;
        height:96px;
        background-color: orange;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        span{
          font-size: 24px;
          color:white;
        }
      }
    }
  }
</style>
