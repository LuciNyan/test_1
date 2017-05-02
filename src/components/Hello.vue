<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>已注册用户：{{ total }}</h2>
    <div v-for="user in users">
      <h4>{{ user.name }}， {{ user.registered }}</h4>
      <button @click="registerUser(user)">注册</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'hello',
    computed: {
      ...mapGetters({
        registrations: 'registrations',
        total: 'totalRegistrations',
        users: 'unregisteredUsers'
      })
    },
    methods: {
      registerUser (user) {
        this.$store.dispatch('register', user.id)
      }
    },
    data () {
      return {
        msg: 'LuciNyan'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
