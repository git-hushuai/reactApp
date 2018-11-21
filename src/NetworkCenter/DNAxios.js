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

/***
 * 
 * 
 *         var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function(){
            debugger
            // console.log(ajax.readyState);
            // console.log(ajax.status);
            console.log(ajax.response);
            // 第五步：在监听函数中，判断readyState=4 && status=200表示请求成功
            if(ajax.readyState==4 && ajax.status==200){
                // 第六步： 使用responseText、responseXML接受响应数据，并使用原生JS操作DOM进行显示
                
                console.log(ajax.responseXML);// 返回不是XML，显示null
                console.log(JSON.parse(ajax.responseText));
                console.log(eval("("+ajax.responseText+")"));
            }
        }
        // 第三步： open一个链接
        ajax.open("GET",'http://localhost:3000/v1/get_entry_by_hot_recomment?device_id=D2F3A47D-6BCA-446A-8D91-C2B7F1068DE1&limit=3&src=ios&token=eyJhY2Nlc3NfdG9rZW4iOiJWMGZIQjNYd1ROazZNRXEzIiwicmVmcmVzaF90b2tlbiI6IllOT3hBMXhOSVU4dXNiSmEiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ%3D%3D&uid=5b8390f3e51d45389d3b5028',true);//true异步请求，false同步
        // 第四步： send一个请求。 可以发送对象和字符串，不需要传递数据发送null
        ajax.send(null);

 */