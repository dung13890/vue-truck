<template>
  <div class="login-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="card">
            <h1 class="card-header">Login</h1>
            <div class="card-body">
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
              <button class="btn btn-lg btn-primary pull-xs-right" @click="onSubmit">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
    }
  }
}
</script>

<style lang="scss">
// Import Main styles for this application
  @import "../assets/sass/modules/login";
</style>
