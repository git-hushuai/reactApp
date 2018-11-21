import axios from 'axios'

const base_url = "http://localhost:3000"

var instance = axios.create({
    baseURL : base_url,
    timeout : 15000,
    headers : {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    }
})

instance.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
})


instance.interceptors.response.use(function(response){
    return response;
},function(error){
    // do something with response error
    return Promise.reject(error)
})


class DNAxiosTool {

    static post (api , param){
        return new Promise((resolve ,reject) => {
            instance.post(api,param).then(response=>{
                resolve(response.data)
            }).catch(error=>{
                reject(error);
            })
        })
    }

    static get(api , param){
        return new Promise((resolve ,reject) => {
            instance.get(api,param).then(response=>{
                resolve(response.data)
            }).catch(error=>{
                reject(error);
            })
        })
    }
}

export default DNAxiosTool;