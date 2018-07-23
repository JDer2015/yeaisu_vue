<template>
  <div class="shiWu_inner_head">
    <span>{{headerName}}</span>
  </div>
</template>

<script>

  export default {
    props:['headerName']
  }
</script>

<style lang="less">
  @import "../../../static/less/mixin";
  .shiWu_inner_head{
    margin-top:20px;
    background-color: white;
    width:100%;
    height:120px;
    padding:0 30px;
    box-sizing: border-box;
    font-size: 40px;
    text-align: center;
    line-height: 120px;
  }
</style>
