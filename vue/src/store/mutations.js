export default {
  // 修改商品列表数据
  mutationGoodsList: function (state, payload) {
    state.goodsList = payload.goodsList
  },
  // 添加商品到购物车中
  mutationAddGoodsToCart: function (state, payload) {
    // payload { goods: goods, count: 1 }
    state.cartGoodsList.push({
      goods: payload.goods,
      count: 1
    })
  },
  // 修改某一个商品的购物车数量
  mutationUpdateCart: function (state, payload) {
    // 修改条件是：state.cartGoodsList中的某一个商品id = payload.goods.id
    for (var index = 0; index < state.cartGoodsList.length; index++) {
      var element = state.cartGoodsList[index]
      // 判断是否符合条件
      if (element.goods.id === payload.goods.id) {
        element.count = payload.count
        break
      }
    }
  }
}
