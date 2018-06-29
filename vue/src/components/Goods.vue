<template>
  <div>
    <h6>{{goods.id}}</h6>
    <p>商品价格：{{goods.price}}</p>
    <p>商品简介：{{goods.description}}</p>
     <p>
       <a href="#" @click.prevent="addcart">添加到购物车</a>
       <a href="#" @click.prevent="back">返回到上一页</a>
     </p>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default{
  name: 'goods',
  props: ['id'],
  computed: {
    // 获取当前id所对应的数据信息
    goods: function () {
      return this.$store.getters.getGoodsById(this.id)
    }
  },
  methods: {
    ...mapMutations(['mutationAddGoodsToCart']),
    addcart () {
      // 添加当前商品到购物车
      this.mutationAddGoodsToCart({goods: this.goods})
      // 路由导航到购物车页面
      this.$router.push('/cart')
    },
    back () {
      // 编程式路由导航会退到上一页
      // this.$rou 表示的是当前组件的路由信息对象（包含路由信息，路由参数信息）
      // this.$router 表示的是路由管理器对象，管理路由跳转操作
      this.$router.go(-1)
    }
  }
}
</script>
