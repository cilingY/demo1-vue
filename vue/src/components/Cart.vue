<template>
    <div class="panel panel-default">
      <div class="panel-body">
        <h6>商品名称：{{cart.goods.name}}</h6>
        <h6>商品价格：{{cart.goods.price}}</h6>
        <p>
          购买数量：
          <button @click="dec">-</button>
          {{cart.count}}
          <button @click="inc">+</button>
        </p>
      </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'cart',
  props: ['cart'],
  methods: {
    ...mapMutations(['mutationUpdateCart']),
    inc () {
      // 修改state中的数据，使商品数量加1
      this.mutationUpdateCart({
        goods: this.cart.goods,
        count: this.cart.count + 1
      })
    },
    dec () {
      // 修改state中的数据，使商品数量加1
      this.mutationUpdateCart({
        goods: this.cart.goods,
        count: this.cart.count - 1
      })
    }
  }
}
</script>
