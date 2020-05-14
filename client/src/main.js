import Vue from 'vue'
import App from './App.vue'
//引入vue-router
import router from './router'
import axios from 'axios'
import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
Vue.prototype.$axios=axios
Vue.config.productionTip = false
Vue.prototype.$ = $
Vue.use(ElementUI)
//挂载路由
new Vue({
  el:'#app',
  router,//router是实例化后的名称
  render: h => h(App)
})
