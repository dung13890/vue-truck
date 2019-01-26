import JwtService from '@/services/jwt.service'
import UserService from '@/services/user.service'
import ApiService from '@/services/api.service'

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
}

const mutations = {
  setError (state, errors) {
    state.errors = errors
  },
  setAuth (state, user) {
    state.isAuthenticated = true
    state.user = user
    state.errors = {}
    JwtService.saveToken(user.token)
  },
  purgeAuth (state) {
    state.isAuthenticated = false
    state.user = {}
    state.errors = {}
    JwtService.destroyToken()
  }
}

const actions = {
  checkAuth ({ commit }) {
    if (JwtService.getToken()) {
      ApiService.setHeader()
      UserService.getAuth()
        .then(data => commit('setAuth', data.user))
        .catch(response => commit('setError', response.data.errors))
    } else {
      commit('purgeAuth')
    }
  },

  async register (context, params) {
    try {
      const { data } = await UserService.register(params)
      context.commit('setAuth', data.user)
      return data
    } catch (errors) {
      throw new Error(`[ERROR] ApiService`)
    }
  }
}

export default {
  state,
  actions,
  mutations
}
