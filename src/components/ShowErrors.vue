<template>
  <div>
    <b-modal
      ref="showErrors"
      centered
      size="sm"
      :hide-header="true"
      :no-close-on-backdrop="true"
      >
      <p v-for="(v, k) in error.messages" :key="k">{{ v }}</p>
      <div slot="modal-footer" class="w-100">
        <b-btn @click="closeError">
          Close
        </b-btn>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { EXCEPTION_STATUS } from '@/config'
export default {
  name: 'ShowErrors',
  data () {
    return {
      isAuthenticate: false
    }
  },

  methods: {
    closeError () {
      this.$store.commit('purgeError')
      this.$refs.showErrors.hide()
      if (this.isAuthenticate) {
        this.$router.push({ name: 'login' })
      }
    }
  },

  watch: {
    error: {
      handler (val) {
        if (val.status !== EXCEPTION_STATUS.statusOK) {
          this.$refs.showErrors.show()
          if (val.status === EXCEPTION_STATUS.unauthorized) {
            this.isAuthenticate = true
          } else {
            this.isAuthenticate = false
          }
        }
      },
      deep: true
    }
  },

  computed: {
    ...mapState({
      error: state => state.common.error
    })
  }
}
</script>
