import {
  RESEIVE_HOMENAV,
  RESEIVE_HOMECAROUSEL,
  RESEIVE_HOMEBRAND,
  RESEIVE_HOMENEW,
  RESEIVE_HOMEGOOD,
  RESEIVE_HOMESPECIAL,
  RESEIVE_HOMESHOPS,

  RESEIVE_SWIPERCONTAINER,
  RESEIVE_SHIWUCAROUSELSCROLL,
  RESEIVE_SHIWURECOMMEND,
  RESEIVE_SHIWUSHIDIAN,
  RESEIVE_SHIWUZHENPIN,
  RESEIVE_SHIWULOOK,
  RESEIVE_SHIWUMORE,
  RESEIVE_CATEGORYS
} from './mutation-types'


export default {
  //home页面头部导航数据
  [RESEIVE_HOMENAV](state,{homeNav}){
    state.homeNav = homeNav
  },
  //轮播图数据
  [RESEIVE_HOMECAROUSEL](state,{homeCarousel}){
    state.homeCarousel = homeCarousel
  },
  //品牌制造商数据
  [RESEIVE_HOMEBRAND](state,{homeBrand}){
    state.homeBrand = homeBrand
  },
  //新品收发数据
  [RESEIVE_HOMENEW](state,{homeNew}){
    state.homeNew = homeNew
  },
  //人气好物数据
  [RESEIVE_HOMEGOOD](state,{homeGood}){
    state.homeGood = homeGood
  },
  //专题精选数据
  [RESEIVE_HOMESPECIAL](state,{homeSpecial}){
    state.homeSpecial = homeSpecial
  },
  //居家好物及其他
  [RESEIVE_HOMESHOPS](state,{homeShops}){
    state.homeShops = homeShops
  },

  //shiWu组件中头部大图轮播数据
  [RESEIVE_SWIPERCONTAINER](state,{swiperContainer}){
    state.swiperContainer = swiperContainer
  },
  //shiWu组件中头部小图轮播数据
  [RESEIVE_SHIWUCAROUSELSCROLL](state,{shiWuCarouselScroll}){
    state.shiWuCarouselScroll = shiWuCarouselScroll
  },
  //为你推荐数据
  [RESEIVE_SHIWURECOMMEND](state,{shiWuRecommend}){
    state.shiWuRecommend = shiWuRecommend
  },
  //十点一刻数据
  [RESEIVE_SHIWUSHIDIAN](state,{shiWuShiDian}){
  state.shiWuShiDian = shiWuShiDian
  },
  //严选甄品数据
  [RESEIVE_SHIWUZHENPIN](state,{shiWuZhenPin}){
    state.shiWuZhenPin = shiWuZhenPin
  },
  //严选LOOK数据
  [RESEIVE_SHIWULOOK](state,{shiWuLook}){
    state.shiWuLook = shiWuLook
  },
  //跟多精彩数据
  [RESEIVE_SHIWUMORE](state,{shiWuMore}){
    state.shiWuMore = shiWuMore
  },
  //分类页数据
  [RESEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
}
