<template>
   <div class="Message">
     <Nav></Nav>
     <div class='main'>
        <section>
            <h2>留言板</h2>
            <p>沟通交流，拉近你我！</p>
            <Rich/>
        </section>
     </div>
   </div>
</template>
<script>
import Nav from "components/Nav";
import Rich from "components/Rich";
export default {
    name: "Message",
    components:{
      Nav,Rich
  }
}
</script>
<style scoped lang="less">
  .Message{
    .main{
      box-sizing: border-box;
      width: 100%;
      padding:70px 50px;
      margin: 0 auto;
      background-color: #eee;
       section:nth-child(1){
            box-sizing: border-box;
            width: 100%;
            padding: 20px 15px;
            >h2{
              font-weight: 700;
              font-size: 2rem;
              text-align: center;
            }
            >p{
              font-size: 1.25rem;
              margin: 1rem 0;
              text-align: center;
            }
          }
    }
  }
</style>
