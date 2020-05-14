<template>
    <div class='home'>  
        <Nav></Nav>
       <h3>我是Home111111111111111{{data[0]}}</h3>
    </div>
</template>
<script>
// import { Test } from 'api/login/index'
import { articleHot } from "api/article/index";
import Nav from "components/Nav";
export default {
    name:'Home',
    data(){
        return{
           data:""
        }
    },
    components:{
      Nav
    },
     created(){
       articleHot().then(res=>{
          //console.log(res)
          this.articleHot = res.data.data
       }).catch(error=>{
          console.log(error)
       })
    },
}
</script>
<style scoped lang="less">
  .home{
      h3{
         height:50px;
         width:100%;
         background-color: aquamarine;
      }
  }
</style>