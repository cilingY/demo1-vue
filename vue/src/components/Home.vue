<template>
    <div>
        <h6>商品列表</h6>
        <ul>
          <li v-for="(item, index) in goodsList" :key="index">
          <router-link v-bind:to="'/goods/' + item.id">{{ item.name }}</router-link>
          </li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default{
  name: 'home',
  computed: {
    ...mapState(['goodsList'])
  },
  created () {
    // 当前组件实例对象创建成功后，执行ajax获取数据
    // this.$store.dispatch(['actionGoodsList']);
    this.actionGoodsList()
  },
  methods: {
    ...mapActions([ 'actionGoodsList' ])
  }
}
</script>
