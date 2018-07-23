import ajax from './ajax'

//home页面头部导航数据
export const reqHomeNav = () => ajax('/homeNav')
//轮播图数据
export const reqHomeCarousel = () => ajax('/homeCarousel')
//品牌制造商数据
export const reqHomeBrand = () => ajax('/homeBrand')
//新品收发数据
export const reqHomeNew = () => ajax('/homeNew')
//人气好物数据
export const reqHomeGood = () => ajax('/homeGood')
//专题精选数据
export const reqHomeSpecial = () => ajax('/homeSpecial')
//居家好物及其他
export const reqHomeShops = () => ajax('/homeShops')

//shiWu组件中头部大图轮播数据
export const reqSwiperContainer = () => ajax('/swiperContainer')
//shiWu组件中头部小图轮播数据
export const reqShiWuCarouselScroll = () => ajax('/shiWuCarouselScroll')
//为你推荐数据
export const reqShiWuRecommend = () => ajax('/shiWuRecommend')
//十点一刻数据
export const reqShiWuShiDian = () => ajax('/shiWuShiDian')
//严选甄品数据
export const reqShiWuZhenPin = () => ajax('/shiWuZhenPin')
//严选LOOK数据
export const reqShiWuLook = () => ajax('/shiWuLook')
//跟多精彩数据
export const reqShiWuMore = () => ajax('/shiWuMore')
//分类页数据
export const reqCategorys = () => ajax('/categorys')

