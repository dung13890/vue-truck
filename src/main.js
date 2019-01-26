import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ApiService from './services/api.service'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

ApiService.init()

router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch('checkAuth')]).then(next)
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
