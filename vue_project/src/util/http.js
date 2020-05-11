import {Loading,Success,Fail} from './toast'

export default (axios,config={})=>{
    // console.log(axios,config)
    let modelName = config.name || "default"
    if(!config.api) throw new Error('配置文件中的api选项是必须的');
    if(Object.prototype.toString.call(config.api) !== '[object Object]')
        throw new Error(`${modelName}配置文件中的api选项必须是个object对象`)

    // 真正的实现http的逻辑
     let httpObj={}
     let api = config.api
     for(let apiName in api){
         let {url,method,isForm,data:apiData,corsUrl} = api[apiName]
          apiData = apiData || {}
        //  console.log(apiName)
         httpObj[apiName] = async (data={})=>{
             let transformData = null
             if(isForm){
                 transformData = new FormData();
                 for(let key in data){
                     transformData.append(key,data[key])
                 }
                 for(let key in apiData){
                    transformData.append(key,apiData[key])
                }
             }else{
                 transformData = Object.assign(apiData,data)
             }
             let body = '';
            //  跨域的公共处理
                if(corsUrl){
                    url = corsUrl + url
                    corsUrl=""
                }
                try{     
                    Loading();       
                    switch (method){
                        case "get":
                        case 'delete':
                            body = await axios({
                                url,
                                method,
                                params:transformData
                            })
                            break;
                        case "put":
                        case "post":
                            body = await axios({
                                url,
                                method,
                                data:transformData
                            })
                            break;
                    }
                    Success();
                } catch(e){
                    Fail()
                }

            return body
         }
     }
     return httpObj
}