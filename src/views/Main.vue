<template>
  <div>
    <app-header/>
      <div class="app-body">
        <app-sidebar></app-sidebar>
        <main id="main" class="main">
          <div class="container-fluid">
            <router-view/>
          </div>
        </main>
        <app-footer/>
      </div>
    <show-errors/>
  </div>
</template>

<script>
import ShowErrors from '@/components/ShowErrors'
import AppHeader from '@/components/partials/Header'
import AppSidebar from '@/components/partials/Sidebar'
import AppFooter from '@/components/partials/Footer'
export default {
  components: {
    ShowErrors,
    AppHeader,
    AppSidebar,
    AppFooter
  }
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import "../assets/sass/main";
</style>
