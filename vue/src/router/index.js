import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Cartlist from '@/components/Cartlist.vue'
import Goods from '@/components/Goods.vue'

Vue.use(Router)

export default new Router({
  // 当路由链接被选中时，自动添加一个class属性
  linkExactActiveClass: 'active',
  routes: [
    { path: '/', component: Home },
    { path: '/cart', component: Cartlist },
    { path: '/goods/:id', component: Goods, props: true }
  ]
})
