import Vue from 'vue'
import Router from 'vue-router'
//引入对应的组件
import Home from '../components/Home'
import News from '../components/News'
Vue.use(Router)
//需要进行进行配置路由
export default new Router({
  routes:[
  {
    path: '/home',//跳转对应组件的路由的路由
    component: Home//对应的组件的名称
  },
  {
    path: '/news',
    component: News
  }
]
})
