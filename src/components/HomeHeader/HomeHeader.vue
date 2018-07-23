<template>
  <div class="head">
    <header class="home_head">
      <img src="/static/img/home/logo.png"></img>
      <input type="text" placeholder="搜索商品，共10719款好物">
      <span class="bg_img"></span>
    </header>
    <nav class="home_nav">
      <ul ref="homeNavUl">
        <li class="on"><a href="#">推荐</a></li>
        <li v-for="(item,index) in homeNavArr" :key="index"><a href="#">{{item}}</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getHomeNav')
    },
    watch:{
      homeNavArr(val){
        if(val.length){
          this.$nextTick(() => {
            this._initBScroll()
          })
        }
      }
    },
    methods:{
      _initBScroll(){
          const ul = this.$refs.homeNavUl
          const count = this.homeNavArr.length
          const ulWidth = (44 + 20) * (count + 1) + 'px'
          ul.style.width = ulWidth
          if(!this.scrollHomeNav){
            this.scrollHomeNav = new BScroll('.home_nav',{
              click:true,
              eventPassthrough: 'vertical',
              scrollX:true
            })
          }else{
            this.scrollHomeNav.refresh()
          }
      }
    },
    computed:{
      ...mapState(['homeNav']),
      homeNavArr(){
       return this.homeNav.map(item => item.name)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../static/less/mixin";
  .head{
    width:100%;
    position: fixed;
    top:0;
    left: 0;
    z-index: 10;
  .home_head{
    width:100%;
    height:88px;
    background-color:white;
  &>img{
     width:138px;
     height:40px;
     margin:25px 30px 10px;
     float:left;
   }
  &>input{
     float:left;
     width:532px;
     height:56px;
     background-color: #eee;
     border-radius: 10px;
     margin-top:16px;
     margin-left:-10px;
     padding-left:120px;
     box-sizing: border-box;
     outline: none;
     font-size: 28px;
   }
  &>span{
     float:left;
     width:28px;
     height:28px;
     margin-top:30px;
     margin-left:-450px;
     display: inline-block;
     background-image: url("/static/img/home/search.png");
     background-size: cover;
   }
  }
  .home_nav{
    height:60px;
    background-color: white;
    width:100%;
    overflow: hidden;
    white-space: nowrap;
  .bottom-border-1px();
  ul{
    font-size:28px;
  .clearFix();
  .on{
    border-bottom:1px solid red;
    a{
      color:red;
    }
  }
  li{
    float:left;
    width:88px;
    height:60px;
    margin:0 20px;
    line-height: 60px;
    text-align: center;
  }
  }
  }
  }
</style>
