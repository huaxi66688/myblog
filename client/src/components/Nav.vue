<template>
  <div  class='container'>
      <div class="nav-main row">
        <div class="nav-logo  col-lg-3 col-12">
              <div class='logos  col-6'>111</div>
              <div class='logoss col-6'>222</div>
        </div>
        <div class="nav-nav   col-lg-7 d-none d-sm-block">
                   <ul class='new clearfix'>
                      <li><router-link to="/home">首页</router-link></li>
                      <li><router-link to="/blog/0">博客</router-link></li>
                      <li><router-link to="/message">留言</router-link></li>
                      <li><router-link to="/diary">日记</router-link></li>
                      <li><router-link to="/links">友链</router-link></li>
                      <li><router-link to="/about">关于</router-link></li>
                  </ul> 
        </div>
        <div class="nav-btn col-lg-2   d-none d-sm-block">
            <el-button @click="ifShowLogin = true" type="primary">登录</el-button>
            <el-button @click="ifShowRegister = true" type="success">注册</el-button>
        </div>
     
      </div>
  </div>
</template>
<script>
</script>
<style lang='less' scoped>
@import '../assets/css/media.css';
    // .container{
    // width: 100%;
    // height: 100%;
    // background-color: #eee;
    
  .nav-main{
      height: 60px;
      background-color:#fff;
      .nav-logo{
        height: 60px;
        line-height: 60px;
        text-align: text;
        color: #777;
        font-size: 40px;
        font-family: BarbaraHand;
        // background-color: red;
        .logos{
          float:left;
        }
        .logoss{
              float:right;
          }
      }
      .nav-btn{
        background-color: green;
        height: 60px;
        line-height: 60px;
      }
      .nav-nav{
        height: 60px;
        // background-color: yellow;
        ul{
          width:100%;
          display: flex;
          li{
            flex:1;
            a{
               position: relative;
              display: block;
              width: 100%;
              height: 100%;
              text-align: center;
              line-height: 60px;
              color: #212220;
              font-weight: 400;
              font-size: 15px;
              transition: color .5s;
              &::after{
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                margin: 0 auto;
                content: "";
                width: 0;
                height: 2px;
                background-color: #6bc30d;
                transition: width .5s;
              }
              &:hover{
                color: #6bc30d;
                &::after{
                  width: 100%;
                }
              }
            
            }

          }
        }
      }
         
          
        
  }
    
  
</style>
