// 对axios的二次封装  拦截器

import axios from 'axios'

class HttpRequest {
  constructor(baseURl){
    this.baseURl=baseURl
  }
    
    grtInsideConfig() {
        const config = {
           baseURl:this.baseURl,
           header:{}
        }
    }
    interceptors(instance) {
        instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
    instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    console.log(error,'error')
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
      });
    }
    request(options) {
        //请求
        const instance = axios.create();
        options = { ...this.grtInsideConfig(), ...options }
        this.interceptors(instance)
        return instance(options)
    }
}
 export default new HttpRequest(baseURl)