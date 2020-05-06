const mongoose = require("mongoose");
//定义
const user = mongoose.model("user",new mongoose.Schema({
  user : {type:String,required:true},
  pwd : {type:String,required: true},
  //注册时间
  regDate : {type:Number , default:Date.now},
  //头像
  photo : {type:String,default:"/images/defaultPhoto.jpg"},
  //是否权限禁用
  disabled : {type:Boolean,default: false},
  //是否是管理员
  admin : {type:Boolean,default:false}
}));
//向集合创建
  // user.create({
  //   user:'admin',
  //   pwd:'123456',
  // });

module.exports = user;