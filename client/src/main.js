import Vue from 'vue'
import App from './App.vue'
//引入vue-router
import router from './router'




Vue.config.productionTip = false
//挂载路由
new Vue({
  el:'#app',
  router,//router是实例化后的名称
 
  render: h => h(App)
})
