import service from "../../utils/request"
//测试接口
// export const articleInfo = (data) =>{//传参数
// export function articleInfo(data){
//   console.log(data)
//     let skip = 0;
//     let limit =5;
//      // console.log(1)
//      return function(tag,ifFresh = false){
//       console.log(1)
//     //let tag = ['', "HTML&Css","JavaScript","Node","Vue&React","Other"][data]
//       if(ifFresh){
//         skip = 0;
//         limit =5;
//       }
//       let data ={ skip , limit , tag }
//       skip += limit;
//       return service.request ({
//           method: 'post',
//           url: '/article/articleinfo/getShow',
//           data
//       })
//   }
// };
//获取文章
export function articleHot(data){
    //console.log(data)
    return service.request ({
        method:'post',
        url: '/article/getHot',
        data
})
}
export function articleTag(data){
    console.log(data)
    let skip = 0;
    let limit =5;
    console.log(1)
    return function(index=0){
        console.log(1)//传给后端
        let tag = ["","HTML&Css","JavaScript","Node","Vue&React","Other"][index]
        let data ={skip, limit , tag }
        console.log(data)
        return service.request ({
            method:'post',
            url: '/article/getTag',
            data
        })
    }
} 