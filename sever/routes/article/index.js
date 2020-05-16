var express = require("express");
var router = express.Router();//导出的名字要
// var articlelist = require("../../models/articlelist");
var articleinfo = require("../../models/articleinfo");
var articletag = require("../../models/articletag");

/*获取文章Info*/
router.post("/getTag",(req,res)=>{
   let { skip,limit,tag } = req.body;
   console.log(skip,limit,tag )
  // let options = tag?{tag}:{}
  let option =tag?{tag}:{}
    articleinfo.find(option,{__v:0},{skip,limit,sort:{pv:-1}})
    .then(data=>{
        console.log(data)
        res.send({
          code:0,
          data
        });
    })
    .catch(err=>{
      res.send({
        code : 4,
        msg : "服务器错误"
      });
    });
});

/*获取文章列表*/
// router.post("/getList",(req,res)=>{
//   // let postData = req.body;
//     articlelist.find().then(data=>{
//       res.send({
//         code : 0,
//         data
//       });
//     })
//     .catch(err=>{
//       res.send({
//         code : 4,
//         msg : "服务器错误"
//       });
//     });
// });

/*获取热门文章 8 篇*/
router.post("/getHot",(req,res)=>{
  //let {limit} = req.body;
  //过滤键值    sort排序,skip个数,limt个数
  articleinfo.find({},{__v:0},{sort:{pv:-1},skip:0,limit:8})
    .then(data=>{
         //console.log(data)
        res.send({
           code : 0,
           data
        });
    }).catch(()=>{
      res.send({
        code : 4,
        msg : "服务器错误",
        data : null
      });
    })
});

/*文章列表的显示*/
// router.post("/getShow",(req,res)=>{
//   let {skip,limit,tag} = req.body;

//   let options = tag?{tag}:{}
//   article.find(options,{__v:0},{skip,limit,sort:{pv:-1}})
//     .then(data=>{
//       res.send({
//         code : 0,
//         data
//       });
//     })
//     .catch(err=>{
//       res.send({
//         code : 4,
//         msg : "服务器错误"
//       });
//     });
// });


//导出
module.exports = router;