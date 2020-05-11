import {NAVDATA} from './mutations_type'//获取头部导航数据
export default {
   [NAVDATA](state,navData){
        state.getRecommendList = navData
   }
}