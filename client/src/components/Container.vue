<template>
  <div id="Container">
    <el-container>
      <el-main>
          <ArticleShow></ArticleShow>
      </el-main>
      <el-aside>
          <div :class="['author',{'fixed':ifFixed}]">
            <div class='author-info'>
              <h3>关于博主</h3>
              <ul>
                  <li>个人简介：一枚穷屌丝，三流毕业，传统文化爱好者，IT民工，日语の动漫</li>
                  <li>座右铭：不在绝望中僭牄，就在绝望中鵚橃。</li>
                  <li>!!!!!!!!!!!!!!!!!!!!!!!!!</li>
              </ul>
                </div>
          </div>
          <div class='search'>
              <div class="search-main">
                <input type="text" placeholder="请输入搜索内容">
               <i class="el-icon-search"></i>
             </div>
             <div class="search-article">
               <ul>
                  <li v-for='(item,index) in articleTag'><router-link :to="'/blog/'+index">{{item}}</router-link></li>
               </ul>
                <div class="cover"></div>
             </div> 
          </div>
          <div class="hot">
            <h3>热门文章</h3>
             <ul>
                <li v-for='(item,index) in articleHot'>
                  <i>{{index+1}}</i>
                  {{item.title}}
                  </li>
             </ul>
          </div>
          <div class="recommend">
            <h3>置顶推荐</h3>
            <ul>
              <li>
                  <i>{{1}}</i> 
              </li>
            </ul>
          </div>
          <div class="visitor">
            <h3>最近访客</h3>
            <ul>
              <li >
                <p>11111</p>
              </li>
            </ul>
          </div>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
import { articleHot } from "api/article/index";
import  ArticleShow from "./ArticleShow";
export default {
    name: "Container",
    data(){
      return{
          articleTag:['全部文章','React','Vue','Nodejs','JavaScript','HtmlCSS'],
          articleHot:'',
           /*控制search的clss名字*/
          ifFixed : false,
      }
    },
    components:{
      ArticleShow
    },
    created(){
       articleHot().then(res=>{
          //console.log(res)
          this.articleHot = res.data.data
       }).catch(error=>{
          console.log(error)
       })
    },
    methods:{
      handleWindowScroll(){
        //console.log(1)
        this.ifFixed = document.documentElement.scrollTop>=1160;
      }
    },
    mounted(){
      //监听window的滚动事件
      window.addEventListener("scroll",this.handleWindowScroll)
    }
    
}
</script>
<style scoped lang="less">
  #Container{
    padding-top: 36px;
    width: 100%;
    user-select: none;
    height:2000px;
    // background: #6bc30d;
    >.el-container{
      box-sizing: border-box;
      width: 100%;
      margin:0 auto;
      padding:0 50px;
      >.el-main{
        padding:0px;
        margin-right: 20px;
      }
      >.el-aside{
        width: 300px;
        // background-color: aqua;
        >.author{
          width: 100%;
          background-color:#fff;
          // padding-bottom:10px;
           &.fixed{
            position: fixed;
            z-index: 3;
            width: 300px;
            animation: searchMove .5s 1 ease-in-out;
            animation-fill-mode: forwards;
          }
           @keyframes searchMove{
            0%{top : -500px}
            40%{top: 81px}
            65%{top: 70px}
            100%{top: 81px}
          }
          >.author-info{
            box-sizing: border-box;
            width:100%;
            height:210px;
            >h3{
              padding: 0 5px 10px;
              line-height: 50px;
              font-weight: 400;
              border-bottom: 1px solid #e8e9e7;
              color: #383937;
              font-size: 18px;
              // background-color: aqua;
            }
            >ul{
              width:100%;
              >li{
                 width:100%;
                 padding:10px;
              }
            }
          }
        }
        >.search{
          width:100%;
          margin-top:20px;
          padding-bottom: 20px;
          background-color: #fff;
         
          >.search-main{
            position:relative;
            box-sizing:border-box;
            height:80px;
            padding:20px;
            background-color:grey;
            >input{
              border:40px;
              width:100%;
              //overflow: hidden;
              height:40px;
              border-radius:22px;
              text-indent: 2rem;
            }
            >i{
              position: absolute;
              right: 40px;
              top: 32px;
              width: 22px;
              height: 22px;
              font-size: 16px;
              cursor: pointer;//点击
            }
          }
          >.search-article{
            position: relative;//为cover设置的
            margin-top:10px;
            width:100%;
            >ul{
              width:100%;
              >li{
              position: relative;//相对于提升本身层级
              z-index: 1;
              width:100%;
              height:40px;
              line-height: 40px;
              border-bottom:1px solid #f60;
              >a{
                width:100%;
                height:40px;
                line-height: 40px;
                padding:0 30px;
               }
                &:hover{
                  background-color: #6bc30d;
               }
              }
            }
            >.cover{
              position: absolute;
              left:0;
              top:0;
              width:100%;
              height:40px;
              border-right: 5px solid #000;
              background-color: rgba(0,0,0,.5)
            }

            }
          }
        }
        .hot,.recommend{
          box-sizing: border-box;
          width: 100%;
          margin-top: 20px;
          background-color: #fff;
          padding: 15px 20px 20px;
          h3{
            padding: 0 5px 10px;
            line-height: 30px;
            font-weight: 400;
            border-bottom: 1px solid #e8e9e7;
            color: #383937;
            position: relative;
            font-size: 18px;
          }
          ul{
            margin-top: 15px;
            li{
              overflow: hidden;
              height: 30px;
              line-height: 30px;
              margin: 7px 0;
              a{
                color: #787977;
                font-size: 14px;
                text-decoration: none;
                &:hover{
                  color: #6bc30d;
                  text-decoration: underline;
                }
              }
              i{
                display: inline-block;
                width: 22px;
                height: 22px;
                margin-right: 10px;
                font-style: normal;
                font-size: 12px;
                color: #666;
                line-height: 22px;
                text-align: center;
                border-radius: 100%;
                background-color: #edefee;
                text-shadow: 0 1px 0 rgba(255,255,255,.5);
              }
              &:nth-child(1) i{
                background-color: #e24d46;
                color: #fff;
              }
              &:nth-child(2) i{
                background-color: #2ea7e0;
                color: #fff;
              }
              &:nth-child(3) i{
                background-color: #6bc30d;
                color: #fff;
              }
            }
          }
        }
        .visitor{
          box-sizing: border-box;
          width: 100%;
          margin-top: 20px;
          background-color: #fff;
          padding: 15px 20px 20px;
          h3{
            padding: 0 5px 10px;
            line-height: 30px;
            font-weight: 400;
            border-bottom: 1px solid #e8e9e7;
            color: #383937;
            position: relative;
            font-size: 18px;
          }
          ul{
            margin-top: 10px;
            li{
              position: relative;
              float: left;
              width: 23%;
              height: 60px;
              margin: 1%;

              background-position: center top;
              background-size: cover;
              background-repeat: no-repeat;

              p{
                overflow: hidden;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 20px;
                line-height: 20px;
                text-align: center;
                background-color: rgba(0,0,0,.3);
                color: #fff;
                font-size: 12px;
              }
            }
            &::after{
              display: block;
              content: '';
              width: 0;
              height: 0;
              clear: both;
            }
          }
        }
      }
    }    
</style>




















