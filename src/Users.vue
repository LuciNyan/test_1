<template>
  <div>
    <h1>Users Overview</h1>
    <p>Team ID is {{ $route.params.teamId }}</p>
    <button @click="goHome">Go Home!</button>
  </div>
</template>

<script>
  export default {
    watch: {
      '$route' (to, from) {
//        alert('This is ' + to.params.teamId)
      }
    },
    created () {
//      alert('This is ' + this.$route.params.teamId)
    },
    methods: {
      goHome () {
        this.$router.push('/')
      }
    }
  }
</script>
