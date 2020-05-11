import config from './config'
import axiosIns from './axios'
import httpUtil from '../../util/http'
export default httpUtil(axiosIns,config)

