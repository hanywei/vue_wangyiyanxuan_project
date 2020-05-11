import http from '../http'
import {NAVDATA} from './mutations_type'
const ok=0
export default{
    async [NAVDATA]({commit}){
        const body = await http.recommend.getIndexRecommend();
        console.log(body)
        commit(NAVDATA,body)
      
    }
}