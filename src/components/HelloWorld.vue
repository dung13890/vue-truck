<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="card">
      <div class="card-body">
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
        <p>{{ user.birthday }}</p>
        <button class="btn btn-lg btn-warning pull-xs-right" @click="onLogout">
          {{ $t('login.btn_login') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  props: {
    msg: String
  },
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },
  methods: {
    onLogout () {
      this.$store
        .dispatch('logout')
        .then(() => this.$router.push({ name: 'login' }))
    }
  },
  created () {
    this.$store
      .dispatch('getInfo')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
