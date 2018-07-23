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
import {
  reqHomeNav,
  reqHomeCarousel,
  reqHomeBrand,
  reqHomeNew,
  reqHomeGood,
  reqHomeSpecial,
  reqHomeShops,

  reqSwiperContainer,
  reqShiWuCarouselScroll,
  reqShiWuRecommend,
  reqShiWuShiDian,
  reqShiWuZhenPin,
  reqShiWuLook,
  reqShiWuMore,
  reqCategorys
} from '../api'

export default {
  //home页面头部导航数据
  async getHomeNav({commit}){
    const result = await reqHomeNav()
    if(result.code === 0){
      const homeNav = result.data
      commit(RESEIVE_HOMENAV,{homeNav})
    }
  },
  //轮播图数据
  async getHomeCarousel({commit}){
    const result = await reqHomeCarousel()
    if(result.code === 0){
      const homeCarousel = result.data
      commit(RESEIVE_HOMECAROUSEL,{homeCarousel})
    }
  },
  //品牌制造商数据
  async getHomeBrand({commit}){
    const result = await reqHomeBrand()
    if(result.code === 0){
      const homeBrand = result.data
      commit(RESEIVE_HOMEBRAND,{homeBrand})
    }
  },
  //新品收发数据
  async getHomeNew({commit}){
    const result = await reqHomeNew()
    if(result.code === 0){
      const homeNew = result.data
      commit(RESEIVE_HOMENEW,{homeNew})
    }
  },
  //人气好物数据
  async getHomeGood({commit}){
    const result = await reqHomeGood()
    if(result.code === 0){
      const homeGood = result.data
      commit(RESEIVE_HOMEGOOD,{homeGood})
    }
  },
  //专题精选数据
  async getHomeSpecial({commit}){
    const result = await reqHomeSpecial()
    if(result.code === 0){
      const homeSpecial = result.data
      commit(RESEIVE_HOMESPECIAL,{homeSpecial})
    }
  },
  //居家好物及其他
  async getHomeShops({commit}){
    const result = await reqHomeShops()
    if(result.code === 0){
      const homeShops = result.data
      commit(RESEIVE_HOMESHOPS,{homeShops})
    }
  },

  //shiWu组件中头部大图轮播数据
  async getSwiperContainer({commit}){
    const result = await reqSwiperContainer()
    if(result.code === 0){
      const swiperContainer = result.data
      commit(RESEIVE_SWIPERCONTAINER,{swiperContainer})
    }
  },
//shiWu组件中头部小图轮播数据
  async getShiWuCarouselScroll({commit}){
    const result = await reqShiWuCarouselScroll()
    if(result.code === 0){
      const shiWuCarouselScroll = result.data
      commit(RESEIVE_SHIWUCAROUSELSCROLL,{shiWuCarouselScroll})
    }
  },
  //为你推荐数据
  async getShiWuRecommend({commit}){
    const result = await reqShiWuRecommend()
    if(result.code === 0){
      const shiWuRecommend = result.data
      commit(RESEIVE_SHIWURECOMMEND,{shiWuRecommend})
    }
  },
  //十点一刻数据
  async getShiWuShiDian({commit}){
    const result = await reqShiWuShiDian()
    if(result.code === 0){
      const shiWuShiDian = result.data
      commit(RESEIVE_SHIWUSHIDIAN,{shiWuShiDian})
    }
  },
  //严选甄品数据
  async getShiWuZhenPin({commit}){
    const result = await reqShiWuZhenPin()
    if(result.code === 0){
      const shiWuZhenPin = result.data
      commit(RESEIVE_SHIWUZHENPIN,{shiWuZhenPin})
    }
  },
  //严选LOOK数据
  async getShiWuLook({commit}){
    const result = await reqShiWuLook()
    if(result.code === 0){
      const shiWuLook = result.data
      commit(RESEIVE_SHIWULOOK,{shiWuLook})
    }
  },
  //跟多精彩数据
  async getShiWuMore({commit}){
    const result = await reqShiWuMore()
    if(result.code === 0){
      const shiWuMore = result.data
      commit(RESEIVE_SHIWUMORE,{shiWuMore})
    }
  },
  //分类页数据
  async getCategorys({commit}){
    const result = await reqCategorys()
    if(result.code === 0){
      const categorys = result.data
      commit(RESEIVE_CATEGORYS,{categorys})
    }
  },
}
