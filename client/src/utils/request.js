import axios from "axios";

// import {getToKen,getUsername} from "@/utils/app.js";
//http://www.web-jshtml.cn/productapi
const BASEURL= process.env.NODE_ENV ==='production'?"api":"api";
//np创建axios,赋给变量service
const service = axios.create({
  baseURL: BASEURL,
  //baseURL: 'https://www.baidu.com',
  timeout: 150000,
});
console.log(process.env.NODE_ENV);

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  debugger
  return config;
},function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
 // console.log(response)  //拦截后的数据
  //拦截后的数据,响应拦截
  // let data = response.data
  // if (data.resCode !== 0){
  //     //alert(111)
  //     Message.error(data.message)
  //     return Promise.reject(data);
  // }else{
    return response;//接受正确的
 
  //}
}, function (error) {
  // 对响应错误做点什么
    return Promise.reject(error);
});


export default service;