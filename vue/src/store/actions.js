import request from './ajax'

export default {
  // ajax获取商品列表
  actionGoodsList: function (context) {
    // context回调参数表示当前Store对象
    request.get('/goods').then(function (response) {
    // 捕获到相应结束后，修改store.js中的相关数据
    // 使用mutations来进行store总的数据的修改
      context.commit('mutationGoodsList', {
        goodsList: response.data
      })
    })
  }
}
