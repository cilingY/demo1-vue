import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  // state表示状态数据
  state: {
    goodsList: [],
    // 购物车中的商品信息
    cartGoodsList: []
  },
  // getters表示计算属性
  getters: {
    cartAmount: function (state) {
      var amount = 0
      for (var index = 0; index < state.cartGoodsList.length; index++) {
        var element = state.cartGoodsList[index]
        // 把当前商品的金额累加到amount上
        amount += element.count * element.goods.price
      }
      return amount
    },
    // 获取指定id的商品数据
    getGoodsById: function (state) {
      // 需要接收一个参数（id值）
      return function (id) {
        for (var index = 0; index < state.goodsList.length; index++) {
          var element = state.goodsList[index]
          if (element.id === id) {
            // 找到了指定元素
            return element
          }
        }
        return {}
      }
    }
  },
  // mutations操作方法
  mutations: mutations,
  // actions异步操作
  actions: actions
})
