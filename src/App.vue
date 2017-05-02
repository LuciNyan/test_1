<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Haru!</h1>
    <hr>
    <router-link to="/">Home</router-link>
    <router-link to="/users/10">Users for 10</router-link>
    <router-link to="/users/12">Users for 12</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
