<template>
  <div id="app">
      <!-- 路由链接 -->
      <nav class="navbar navbar-default" role="navigation">
        <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Vue实例</a>
        </div>
        <ul class="nav navbar-nav">
          <router-link to="/" tag="li"><a href="#">首页</a></router-link>
          <router-link to="/cart" tag="li"><a href="#">购物车</a></router-link>
        </ul>
        </div>
      </nav>
      <!-- 路由组件的加载位置 -->
      <div class="panel panel-default">
        <div class="panel-body">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
