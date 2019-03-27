<template>
  <div class="home">
    <profile />
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from '@/components/Profile'

export default {
  name: 'home',
  components: {
    Profile
  }
}
</script>
