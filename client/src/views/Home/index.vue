<template>
  <div class="Home">
    <!--背景图-->
    <div class="bg" :style="{height:bgHeight+'px'}">
      <div class="bg-content loading">
        <h1>陌 生 人</h1>
        <h2>来生陌生的是昨日最亲的某某</h2>
        <router-link to="/blog/0">Enter Blog</router-link>
      </div>
      <i class="bg-icon el-icon-arrow-down"></i>
    </div>

    <!--右上角菜单-->
    <div :class="['menu',{'click':ifClick}]">
      <div class="btn" @click="handleClick">
        <span></span><span></span><span></span>
      </div>
      <div class="cover">
        <div class="point">
          <router-link to="/">首页</router-link>
          <router-link to="/blog/0">博客</router-link>
          <router-link to="/message">留言</router-link>
        </div>
        <div class="cover-logo">Anonymity</div>
      </div>
    </div>

    <!--热门文章-->
    <div class="hot">
      <div class="hot-main">
        <div class="text loading">
          <h2>远 方 有 多 远</h2>
        <p>
           快将尘埃掸落，别将你眼眸弄脏，或许吧，谈笑中你早已淡忘，而我在颠沛中，已饱经一脸沧桑，思念需要时间慢慢调养，往日记起来，暂能慰藉心肠，详尽来回首，才忽觉是荒唐
        </p>
        </div>
        <ul class="loading">
           <li v-for="(item,index) in imgList"  :key='index'>
              <span>{{item.title}}</span>
              <div class='hot_img'>
                    <img :src='item.img' />
                    <div class='link'> 
                     
                    </div>
              </div>
              <p>{{item.content}}</p>
            </li>
        </ul>
      </div>
    </div>

    <!--关于&友链-->
    <div class="about">
      <div class="wrap">
        <ul class="loading">
          <li><router-link to="/about">关于</router-link></li>
          <li><router-link to="/links">+友情链接</router-link></li>
        </ul>
      </div>
    </div>
    <div class='interest'>
          <h3>夏目友人帐</h3>
      <p>人生不应背负的罪名而选择道路，而是应在选择的道路上背负罪名。</p>
    </div>
    <div class='blogsinfo'>
      <div>
         <div>
            <i class='fa fa-book'></i>
            <span>时不待我</span>
         </div>
         <div>
            <i class='fa fa-book'></i>
            <span>抓紧学习</span>
         </div>
      </div>
      <div>
      </div>
      <div>
        <span>联系我</span>
        <ul>
          <li>
            <i class="fa fa-map"> </i>
            <span>地址:重庆市沙坪坝虎溪镇</span>
          </li>
            <li><i class="fa fa-weixin"></i>
            <span>VX:huaxi66688</span>
          </li>
          <li> 
            <i class="fa fa-envelope"></i>
            <span>邮箱:huaxi2017@126.com</span>
          </li>
        </ul>
      </div>
      </div>
    <div class='reserved'>
        <span>www.anonys.cn</span>
        <span>All rights reserved</span>
        <span>渝ICP备19015595号</span>
    </div>
  </div>
</template>

<script>
  // import request from 'api/index'
  // const getArticleHot = request.getArticleHot;

  //得到DOM距离页面顶部的距离
  function getTop(node){
    let top = 0;
    while(node !== document.body){
      top += node.offsetTop;
      node = node.offsetParent;
    }
    return top;
  }

  export default {
    name: "Home",
    data(){
      return {
        bgHeight : 0,
        ifClick : false,
        articleHotList : [],
        imgList:[
        {title:"JavaScript&Node.js",img:require('assets/images/one.jpg'),content:'JavaScript是一种基于对象和事件驱动并具有相对安全性的客户端脚本语言。同时也是一种广泛用于客户端Web开发的脚本语言，常用来给HTML网页添加动态功能，比如响应用户的各种操作。Node.js 是一个让 JavaScript 运行在服务端的开发平台，它让 JavaScript 成为与PHP、Python、Perl、Ruby等服务端语言平起平坐的脚本语言。'},
        {title:"Vue&React",img:require('assets/images/two.jpg'),content:'Vue.js是一个构建数据驱动的 web 界面的渐进式框架。通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。React 是可以非常轻松地创建用户交互界面，设计简洁的状态视图，在数据改变时，高效地更新渲染界面'},
        {title:"ThinkPHP&Laravel",img:require('assets/images/three.jpg'),content:'ThinkPHP是一个快速、兼容而且简单的轻量级国产PHP开发框架。Laravel是一套简洁、优雅的PHP Web开发框架。它可以让你从面条一样杂乱的代码中解脱出来；它可以帮你构建一个完美的网络APP，而且每行代码都可以简洁、富于表达力'}
      ]
      }
    },
    methods:{
      //设置bg高度与window高度一致
      getWindowHeight(){
        this.bgHeight = window.innerHeight;
      },

      //滚轮滚动事件
      handleScroll(){
        let loadingDom = document.querySelectorAll(".loading");
        let scrollTop = document.documentElement.scrollTop + window.innerHeight;
        loadingDom.forEach(node=>{
          if (scrollTop > getTop(node) + 100){
              node.classList.remove("loading");
          }
        });
      },

      //点击右侧菜单
      handleClick(){
        this.ifClick = !this.ifClick;
      },


    },
    filters : {
      date(value){
        return value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/)[3];
      },
      month(value){
        return value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/)[2];
      },
      year(value){
        return value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/)[1];
      }
    },
    created() {
      this.getWindowHeight();
    },
    mounted() {
      getArticleHot(3).then(res=>{
        this.articleHotList = res.data.data;
      });

      //resize

      window.addEventListener("resize",this.getWindowHeight);

      //scroll
      this.handleScroll();
      window.addEventListener("scroll",this.handleScroll);

    },
    destroyed() {
      window.removeEventListener("resize",this.getWindowHeight);
    }
  }
</script>

<style lang="less" scoped>
  .Home{
    user-select: none;
    .bg{
      position: relative;
      z-index:9;
      width: 100%;
      background: url("~assets/images/bg.jpg") center center/cover;
      &::before{
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.3);
      }
      .bg-content{
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: 1;
        width: 100%;
        height: 154px;
        /*background-color: pink;*/
        text-align: center;
        font-size: 14px;
        line-height: 24px;
        color: white;
        transform: scale(1);
        transition: transform 1s;
        &.loading{
          transform: scale(0.5);
        }
        h1{
          font-weight: 400;
          font-size: 2em;
        }
        h2{
          font-weight: 400;
          letter-spacing: 10px;
          margin: 20px 0;
          font-size: 1em;
        }
        a{
          display: inline-block;
          height: 38px;
          line-height: 38px;
          padding: 0 18px;
          background-color: #1E9FFF;
          color: #fff;
          white-space: nowrap;
          text-align: center;
          font-size: 14px;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          margin-top: 20px;
          transition: opacity .3s;
          &:hover{
            opacity: .8;
          }
        }
      }
      .bg-icon{
        position: absolute;
        z-index: 11;
        bottom: 30px;
        left: 50%;
        margin-left: -25px;
        width: 50px;
        height: 50px;
        color: #fff;
        font-weight: 700;
        font-size: 36px;
        border-radius: 50%;
        transition: background-color .7s;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
        &:hover{
          background-color: #6bc30d;
        }
      }
    }
    .menu{
      .btn{
        box-sizing: border-box;
        position: fixed;
        z-index: 999;
        right: 55px;
        top: 40px;
        padding-top: 12px;
        width: 40px;
        height: 40px;
        cursor: pointer;
        border-radius: 50%;
        background-color: transparent;
        transition: background-color .3s;
        &:hover{
          background-color: #6bc30d;
        }
        span{
          position: relative;
          top: 0;
          display: block;
          width: 26px;
          height: 2px;
          margin: 0 auto 5px;
          background-color: #fff;
          transition: all .32s;
          transform: rotate(0deg);
        }

      }
      .cover {
        opacity: 0;
        z-index: 8;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
        transition: opacity .3s;
        &::before{
          position: absolute;
          left: 100%;
          top: 0;
          content: "";
          width: 4999px;
          height: 100%;
          background-color: #F9F9F8;
          transform: skew(-12deg);
          transition: left .3s;
        }
        .point{
          position: absolute;
          right: 0;
          top: 200px;
          z-index: 101;
          font-size: 20px;
          a{
            position: relative;
            display: block;
            text-align: right;
            color: #686967;
            line-height: 46px;
            padding: 10px 30px;
            margin-right: 20px;
            font-size: 20px;
            text-decoration: none;
            -webkit-transition: color .6s linear;
            transition: color .6s linear;
            &::before{
              position: absolute;
              top: 50%;
              left: 0;
              width: 0;
              opacity: 0;
              height: 1px;
              background-color: #6bc30d;
              content: "";
              transition: all .3s;
            }
            &:hover{
              color: #6bc30d;
            }
            &:hover::before{
              width: 100%;
              opacity: 1;
            }
          }
        }
        .cover-logo{
          font-size: 50px;
          position: absolute;
          right: 0;
          bottom: 0;
          z-index: 101;
          padding: 10px 50px;
          font-family: BarbaraHand;
          color: #686967;
          cursor: pointer;
        }
      }
      &.click{
        .btn{
          background-color: rgba(0, 0, 0, 0.1);
          span:nth-child(1){
            top: 8px;
            transform: rotate(45deg);
          }
          span:nth-child(2){
            top: 1px;
            transform: rotate(-45deg);
          }
          span:nth-child(3){
            display: none;
          }
        }
        .cover{
          opacity: 1;
          z-index: 10;
          &::before{
            left: 65%;
          }
        }
      }
    }
    .hot{
      overflow: hidden;
      width: 100%;
      position: relative;
      z-index: 9;
      padding: 100px 0;
      background-color: #fff;
      .hot-main{
        max-width: 1170px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        .text{
          position: relative;
          top: 0;
          opacity: 1;
          transition: opacity .3s,top .5s;
          &.loading{
            top: -100px;
            opacity: 0;
          }
          >h2{
            position: relative;
            font-size: 32px;
            padding-bottom: 30px;
            font-weight: 500;
            &::before{
              position: absolute;
              width: 50px;
              height: 2px;
              content: "";
              left: 50%;
              margin-left: -25px;
              bottom: -1px;
              background: #00c2ff;
            }
          }
          >p{
            margin-top: 20px;
            line-height: 22px;
            color: #888;
          }
        }
        // >ul{
        //   display: flex;
        //   width: 100%;
        //   height: 503px;
        //   margin-top: 50px;
        //   li{
        //     position: relative;
        //     top: 0;
        //     flex: 1;
        //     height: 503px;
        //     padding: 0 10px;
        //     opacity: 1;
        //     .img{
        //       overflow: hidden;
        //       position: relative;
        //       width: 100%;
        //       height: 244px;
        //       .bgImg{
        //         width: 100%;
        //         height: 100%;
        //         background-position: center center;
        //         background-size: cover;
        //       }
        //       .link{
        //         position: absolute;
        //         top: -100%;
        //         left: 0;
        //         width: 100%;
        //         height: 100%;
        //         background-color: rgba(255,255,255,.3);
        //         opacity: 0;
        //         transition: .3s;
        //         a{
        //           position: absolute;
        //           left: 50%;
        //           top: 50%;
        //           margin-top: -20px;
        //           margin-left: -20px;
        //           width: 40px;
        //           height: 40px;
        //           background: #333;
        //           color: #fff;
        //           line-height: 40px;
        //           text-align: center;
        //           i{
        //             font-size: 16px;
        //           }
        //       }

        //       }
        //       &:hover .link{
        //         top: 0;
        //         opacity: 1;
        //       }
        //     }
        //     .info{
        //       box-sizing: border-box;
        //       width: 100%;
        //       height: 209px;
        //       padding: 30px 15px;
        //       background: #faf9f9;
        //       text-align: left;
        //       .title{
        //         margin-bottom: 10px;
        //         text-overflow: ellipsis;
        //         overflow: hidden;
        //         white-space: nowrap;
        //         a{
        //           color: #333;
        //           &:hover{
        //             color: #777;
        //           }
        //         }
        //       }
        //       .time{
        //         color: #bbb;
        //         font-size: 12px;
        //         margin-bottom: 15px;
        //       }
        //       .content{
        //         overflow: hidden;
        //         line-height: 20px;
        //         height: 60px;
        //         color: #999;
        //       }
        //       .link{
        //         display: inline-block;
        //         margin-top: 15px;
        //         padding: 0;
        //         background: 0 0;
        //         border: none;
        //         color: #29b6f6;
        //         transition: all .4s ease;
        //         &:hover{
        //           color: #333;
        //         }
        //       }
        //     }

        //   }
        //   li:nth-child(1){
        //     transition: .6s 0s;
        //   }
        //   li:nth-child(2){
        //     transition: .6s .1s;
        //   }
        //   li:nth-child(3){
        //     transition: .6s .2s;
        //   }
        //   &.loading li{
        //     top: 100px;
        //     opacity: 0;
        //   }
        // }

        ul{
        display:flex;
        margin-top:20px;
        padding:0 36px;
        li{
            position: relative;
            top:0;
            flex:1;
            height:500px;
            margin-left:20px;
            background-color:#eee;
              /* background: #6bc30d; */
            // box-shadow: 10px 10px 5px #e0e0e0;
            padding:0 20px;
            &:hover{
              box-shadow:0 15px 30px 0;
              transform: translate3d(0, -2px, 0);
            }
            span{
                display: block;
                height:60px;
                line-height: 60px;
                text-align: center;
                width:100%;
            }
            .hot_img{
                position: relative;
                height:220px;
                text-align: center;
                width:100%;
                padding:20px 0;
                img{
                   position: relative; 
                   height:100%;
                   width:220px;
                   background-position: center center;
                   background-size:cover;
                }
                .link{/*遮罩层使用*/
                  position: absolute;
                  top: -100%;
                  opacity:0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background-color: rgba(255,255,255,0.3);
                //background:rgba(243,171,217,0.7);
                  /* opacity: 0;*/
                  scale: 0.8;
                  transition: .3s; 
                }
                &:hover .link{
                  top:0;
                  opacity: 1;
                  scale:1.5;
               p{
                box-sizing: border-box;
                text-indent: 5px;      
                text-align: left;
                padding:50px 15px;
               } 
            }
            
          } 

          }
      }
      }
    }
    .about{
      position: relative;
      z-index:9;
      width: 100%;
      height: 48px;
      padding: 111px 0;
      margin: 0 auto;
      background: url("../../assets/images/index.jpg") center center/cover fixed;
      &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
      }
      ul {
        position: relative;
        z-index: 9;
        width: 425px;
        margin: 0 auto;
        opacity: 1;
        transition: .6s;
        &.loading {
          width: 1000px;
          opacity: 0;
        }
        li {
          position: relative;
          width: 198px;
          height: 46px;
          border: 1px solid #fff;
          &:nth-child(1){
            float: left;
          }
          &:nth-child(2){
            float: right;
          }
          &::after{
            position: absolute;
            left: 0;
            top: 0;
            content: "";
            width: 0;
            height: 46px;
            background-color: skyblue;
            transition: width .5s;
          }
          &:hover::after{
            width: 100%;
          }
          a{
            position: relative;
            z-index: 1;
            display: block;
            width: 100%;
            height: 100%;
            line-height: 46px;
            text-align: center;
            color: #fff;
          }
        }
      }
    }
    .interest{
    position:relative;
    width:100%;
    height:300px;
    /* background: #fff; */
    background: url("../../assets/images/xm4.jpeg") center center/cover fixed; 
    color:#333;
    text-align: center;
    &::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.3);
    }
    h3{
       font-size: 32px;
       padding:20px 0;
       font-weight: 400;
       margin: 0 auto;
       text-align: center;
       p{
          font-weight: 400;

       }
    }

  }
  .blogsinfo{
    width:100%;
    height:270px;
    background-color: #6bc30d;
    display: flex;
    flex-flow:row nowrap;
    div:nth-child(1){
      flex:1;
      color:#FFF;
      background-color:#232328;
      div{
        height:100px;
        text-align: center;
        line-height: 100px;
        width:100%;
        i{
          margin-right:20px;
        }
        span{
          letter-spacing: 2px;
        
        }
      }

    }
    div:nth-child(2){
        flex:1;
        color:#FFF;
      background-color:#232328;
    }
    div:nth-child(3){
        flex:1;
        width: 90%;
        background-color:#232328;
        padding-right: 15px;
        padding-left: 15px;
        color:#FFF;
        >span{
          display: block;
          padding:20px 0;
          height:50px;
          font-size: 18px;
          text-transform: uppercase;
        }
        ul{
          width:100%;
          li{
            display: flex;
            width: 300px;
            font-size: 14px;
            height: 40px;
            >span{
             display: block;
            color: #fff;
             padding:0 20px;
            }
          }
    }
    }
  }
  .reserved{
         width:100%;
        line-height:30px;
        text-align: center;
        background-color:#333;
        color:#fff;
        font-size:12px;
    letter-spacing: 0.8px;
      }
}
</style>










