<template>
  <div id="main">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <show-errors/>
    <router-view/>
  </div>
</template>

<script>
import ShowErrors from '@/components/ShowErrors'
export default {
  name: 'main',
  components: {
    ShowErrors
  }
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import "../assets/sass/main";
</style>
