 import service from "../../utils/request"
//测试接口
export const Test= (data) =>{//传参数
    return service.request ({
      method: 'post',
      url: '/login/logins',
      data
    });
};



//配置默认的参数
// 

// import axios from "axios";
// export default{
//   Test(){
//     return axios.post("/logins/login")
//   },
// }