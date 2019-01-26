<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul v-if="errors" class="error-messages">
      <li v-for="(v, k) in errors" :key="k">{{ k }} {{ v | error }}</li>
    </ul>
    <form v-on:submit.prevent="onSubmit">
      <fieldset class="form-group">
        <input
          class="form-control form-control-lg"
          type="text"
          v-model="username"
          placeholder="Username"
        />
      </fieldset>
      <fieldset class="form-group">
        <input
          class="form-control form-control-lg"
          type="text"
          v-model="email"
          placeholder="Email"
        />
      </fieldset>
      <fieldset class="form-group">
        <input
          class="form-control form-control-lg"
          type="password"
          v-model="password"
          placeholder="Password"
        />
      </fieldset>
      <button class="btn btn-lg btn-primary pull-xs-right">
        Sign up
      </button>
    </form>

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
      errors: state => state.auth.errors
    })
  },
  methods: {
    onSubmit () {
      this.$store
        .dispatch('register', {
          email: this.email,
          password: this.password,
          username: this.username
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
