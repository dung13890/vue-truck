<template>
  <div class="login-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <div class="card">
            <div class="card-block">
              <h1 class="card-title">{{ $t('login.txt_login') }}</h1>
              <p class="text-muted">{{ $t('login.txt_login_hint') }}</p>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  v-model="email"
                  :placeholder="$t('login.lbl_email')"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  v-model="password"
                  :placeholder="$t('login.lbl_password')"
                />
              </fieldset>
              <show-errors/>
              <button class="btn btn-lg btn-primary pull-xs-right" @click="onSubmit">
                {{ $t('login.btn_login') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShowErrors from '@/components/ShowErrors'
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
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
        .then(() => this.$router.push({ name: 'home' }))
    }
  },
  components: {
    ShowErrors
  },
  created () {
    this.$store.commit('purgeAuth')
  }
}
</script>

<style lang="scss">
// Import Main styles for this application
  @import "../assets/sass/modules/login";
</style>
