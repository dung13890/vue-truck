import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueI18n from 'vue-i18n'
import en from '@/lang/en'
import App from './App.vue'
import router from './router'
import store from './store'
import ApiService from './services/api.service'

[BootstrapVue, VueI18n].forEach(x => Vue.use(x))

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en
  }
})

ApiService.init()

router.beforeEach((to, from, next) => {
  store.dispatch('checkAuth')
    .then(isAuth => {
      if (!isAuth && to.path !== '/login') {
        next({ name: 'login' })
      } else {
        next()
      }
    })
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
