<template>
  <div>
    <div class="home_good">
      <span>人气推荐·好物精选</span>
      <span>查看全部></span>
    </div>
    <div class="home-good-content">
      <ul ref="homeGoodUl">
        <li v-for="(item,index) in homeGood" :key="index">
          <img :src="item.listPicUrl">
          <span v-if="item.newItemFlag">新品</span>
          <p>{{item.name}}</p>
          <p>{{item.simpleDesc}}</p>
          <p>￥{{item.retailPrice}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$store.dispatch('getHomeGood')
    },
    watch:{
      homeGood(val){
        if(val.length){
          this.$nextTick(() => {
            this._initBScroll()
          })
        }
      }
    },
    methods:{
      _initBScroll(){
        const ul = this.$refs.homeGoodUl
        const count = this.homeGood.length
        const ulWidth = (163 + 15) * count + 'px'
        ul.style.width = ulWidth
        if(!this.scrollHomeGood){
          this.scrollHomeGood = new BScroll('.home-good-content',{
            click:true,
            eventPassthrough: 'vertical',
            scrollX:true
          })
        }else{
          this.scrollHomeGood.refresh()
        }
      }
    },
    computed:{
      ...mapState(['homeGood'])
    }
  }
</script>

<style lang="less">
  @import "../../../static/less/mixin";
  .home_good{
    width:100%;
    height:260px;
    background-image: url("/static/img/home/content/bg3.png");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    span{
      font-size:40px;
      line-height: 100px;
      &:nth-of-type(2){
        line-height: 60px;
        font-size: 30px;
        display: inline-block;
        width: 240px;
        height:60px;
        background-color: #F4E9CB;
        text-align: center;
        border-radius: 10px;
      }
    }
  }
  .home-good-content{
    width:100%;
    margin-bottom:20px;
    overflow: hidden;
    background-color: white;
    ul{
      float:left;
      white-space: nowrap;
      li{
        display: inline-block;
        width:330px;
        margin-top:30px;
        margin-left:30px;
        img{
          width:330px;
          height:330px;
          background-color: #eeeeee;
        }
        span{
          display: block;
          width:80px;
          margin-left:20px;
          margin-top:10px;
          margin-bottom:10px;
          height:40px;
          line-height: 40px;
          text-align: center;
          background-color: orange;
          color:white;
        }
        p{
          .ellipsis();
          margin:5px 0;
          font-size: 30px;
          padding-left:20px;
          line-height: 40px;
          &:nth-of-type(2){
            font-size: 28px;
            color:#eee;
          }
          &:nth-of-type(3){
            color:red;
          }
        }
      }
    }
  }
</style>
