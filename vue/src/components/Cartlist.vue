<template>
  <div>
    <h6>购物车列表</h6>
    <cart-component v-for="(item, index) in cartGoodsList" :key="index" :cart="item"></cart-component>
    <p>
      订单金额：{{cartAmount}}
    </p>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import Cart from './Cart.vue'
export default {
  name: 'cartlist',
  computed: {
    ...mapState(['cartGoodsList']),
    ...mapGetters(['cartAmount'])
  },
  components: {
    'cart-component': Cart
  }
}
</script>
