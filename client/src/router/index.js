import Vue from 'vue'
import Router from 'vue-router'
//引入对应的组件
Vue.use(Router)
//需要进行进行配置路由
export default new Router({
  // mode:"history",
  routes:[
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: () => import('../views/Home')
    // },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home')
    },
    {
        path: '/blog/:id',
        name: 'Blog',
        component: () => import('../views/Blog')
    },
  //   {
  //     path: '/',
  //     name: 'Blog',
  //     component: () => import('../views/Blog')
  // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: () => import('../views/About')
    // },
    
    {
      path: '/message',
      name: 'Message',
      component: () => import('../views/Message')
    },
    // {
    //   path: '/diary',
    //   name: 'Diary',
    //   component: () => import('../views/Diary')
    // },
    // {
    //   path: '/links',
    //   name: 'Links',
    //   component: () => import('../views/Links')
    // },
    // {
    //   path: '/Article/:id',
    //   name: 'Article',
    //   component: () => import('../views/Article')
    // },
    // {
    //   path: '*',
    //   name: 'NotFound',
    //   component: () => import('../views/404')
    // }
  
]
})
