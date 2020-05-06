const express = require("express");
const router = express.Router()
const user = require("../../models/user");
//登录接口
// router.get("/",(req,res)=>{
//     User.find().then(User=>{//传参
//         if( !User ){
//             return res.status(404).json('你查不到内容')
//         }
//         res.json(User)
//     })
// .catch(err =>res.status(404).json( err ))
// })
router.get("/",(req,res)=>{
    user.find().then(User=>{//传参
        if(User){
            res.send({
                  code:200,
                  msg:'登录成功',
                  data:User
            });
        }else{
            res.send({
                  code:0,
                  msg:'没有查找成功'
            });
        }
        }).catch(err =>{ 
            res.send({
            code:100,
            msg:"服务器错误请稍后再试"
        })
    })
})
module.exports = router;