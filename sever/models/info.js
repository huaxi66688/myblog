//引入mogoose第三方模块
const mongoose= require('mongoose')
//创建用户集合规则
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    sex:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    feature:{
        type:Number,
        required:true
    }
})
const info = mongoose.model('info',userSchema)
// info.create({
//     name:'xql',
//     sex:'男',
//     age:18,
//     feature:20,
// })

//暴露
module.exports= info
