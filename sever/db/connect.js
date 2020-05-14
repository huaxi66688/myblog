const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/blogPro',{useNewUrlParser:true,useUnifiedTopology: true },(err)=>{
//     if(err){
//         console.log('数据库连接失败')
//         return
//     }else{
//         console.log('blogpro数据库连接成功')
//     }
// })

mongoose.connect('mongodb://localhost:27017/blogpro',{useNewUrlParser:true,useUnifiedTopology: true })
.then(()=>{console.log('blogpro数据库连接成功')})
.catch((err)=>{
    console.log(err)
    console.log('数据库连接失败')
})