<template>
  <header class="navbar navbar-default app-header">
    <div class="container-fluid">
      <div class="row brand">
        <button class="navbar-toggler" type="button" @click="sidebarToggle">&#9776;</button>
        <b-link class="navbar-brand img-responsive hidden-md-down" to="/home"></b-link>
      </div>
      <b-nav>
        <b-nav-item-dropdown text="Admin" right>
          <b-dropdown-item><i class="ion-person"></i> Profile</b-dropdown-item>
          <b-dropdown-item><i class="ion-ios-cog-outline"></i> Settings</b-dropdown-item>
          <b-dropdown-item @click="onLogout"><i class="ion-power"></i> Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      toggle: 'sidebar-hidden'
    }
  },

  computed: {
    toggledString () {
      let width = window.innerWidth || document.documentElement.clientWidth
      return width < 991 ? 'sidebar-mobile-show' : 'sidebar-hidden'
    }
  },

  methods: {
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle(this.toggledString)
    },
    onLogout () {
      this.$store
        .dispatch('logout')
        .then(() => this.$router.push({ name: 'login' }))
    }
  }
}
</script>
