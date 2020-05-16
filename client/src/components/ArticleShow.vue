<template>
  <div class="articleShow">
    <section v-for="item in  articleList">

      <h5>
        {{item}}
      </h5>

   </section>
    
   
  </div>
</template>
<script>
import { articleTag  } from 'api/article/index'
  export default {
    name:"ArticleShow",
    data(){
      return {
        articleList:"",
        //no-more的显示与否
        ifNoMore : false,
        //是否在加载
        ifLoding : false
      }
    },
    filters : {
      date(value){
        return value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/)[3];
      },
      month(value){
        return value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/)[2];
      },
      year(value) {
        return value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/)[1];
      },

      contentToText(value){
        var div = document.createElement("div");
        div.innerHTML = value;
        return div.innerText;
      }
    },

    computed:{
      id(){
            return this.$route.params.id
      }
    },
    watch:{
          id(){
            //dangidfSHENGBISN
            articleTag()(this.id).then(res=>{
                    console.log(this.$route.params.id+'ddd')
                  this.articleList=res.data.data
              })
          }
    },
    created(){
         articleTag()(this.id).then(res=>{
          //console.log(this.$route.params.id+'ddd')
           this.articleList=res.data.data
      }).catch(error=>{
          console.log(error)
      })
   },
  }
</script>
<style scoped lang="less">
.articleShow{
    >section{
      position: relative;
      box-sizing: border-box;
      width: 100%;
      padding:20px 30px 25px;
      background-color: #fff;
    }
  }
</style>
