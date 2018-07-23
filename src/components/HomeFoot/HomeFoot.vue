<template>
  <div class="home_foot">
    <div>
      <span>下载APP</span>
      <span>电脑版</span>
    </div>
    <p>网易公司版权所有 © 1997-2018</p>
    <p>食品经营许可证：JY13301080111719</p>
  </div>
</template>

<script>

  export default {}
</script>

<style lang="less">
  @import "../../../static/less/mixin";
  .home_foot{
    width:100%;
    height:244px;
    background-color: #414141;
    overflow: hidden;
    margin-bottom:99px;
    div{
      margin:50px 150px 30px;
      display: flex;
      justify-content: space-around;
      span{
        font-size: 20px;
        color: white;
        text-align: center;
        line-height: 62px;
        width:172px;
        height:62px;
        display: inline-block;
        border: 2px solid #fff;
        border-radius: 5px;
      }
    }
    p{
      color:#999;
      text-align: center;
      margin:10px 0;
    }
  }
</style>
