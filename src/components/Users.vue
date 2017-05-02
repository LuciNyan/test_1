<template>
  <div>
    <h1>Users Overview</h1>
    <img src="../assets/logo.png">
    <p>Team ID is {{ $route.params.teamId }}</p>
    <p>Register: {{ total }}</p>
    <div v-show ="isShow">
      <div v-for ="user in registrations">
        <h4>{{ user.name }}, date: {{ user.date }}</h4>
      </div>
      <button @click="goHome">Go Home!</button>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        isShow: true
      }
    },
    computed: {
      ...mapGetters({
        total: 'totalRegistrations',
        registrations: 'registrations'
      })
    },
    watch: {
      '$route' (to, from) {
        if (to.params.teamId === '10') {
          this.isShow = true
        } else {
          this.isShow = false
        }
//        alert('This is ' + to.params.teamId)
      }
    },
    created () {
//      alert('This is ' + this.$route.params.teamId)
      if (this.$route.params.teamId === '10') {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    methods: {
      goHome () {
        this.$router.push('/')
      }
    }
  }
</script>
