<template>
  <div>
    <div class="home_new">
      <span>新品首发</span>
      <span>查看全部></span>
    </div>
    <div class="home-new-content">
      <ul ref="homeNewUl">
        <li v-for="(item,index) in homeNew" :key="index">
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
      this.$store.dispatch('getHomeNew')
    },
    watch:{
      homeNew(val){
        if(val.length){
          this.$nextTick(() => {
            this._initBScroll()
          })
        }
      }
    },
    methods:{
      _initBScroll(){
        const ul = this.$refs.homeNewUl
        const count = this.homeNew.length
        const ulWidth = (163 + 15) * count + 'px'
        ul.style.width = ulWidth
        if(!this.scrollHomeNew){
          this.scrollHomeNew = new BScroll('.home-new-content',{
            click:true,
            eventPassthrough: 'vertical',
            scrollX:true
          })
        }else{
          this.scrollHomeNew.refresh()
        }
      }
    },
    computed:{
      ...mapState(['homeNew'])
    }
  }
</script>

<style lang="less">
  @import "../../../static/less/mixin";
  .home_new{
    width:100%;
    height:260px;
    background-image: url("/static/img/home/content/bg1.png");
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
        background-color: #D8E5F1;
        text-align: center;
        border-radius: 10px;
      }
    }
  }
  .home-new-content{
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
