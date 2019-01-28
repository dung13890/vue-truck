import JwtService from '@/services/jwt.service'
import UserService from '@/services/user.service'
import ApiService from '@/services/api.service'

const state = {
  user: {},
  isAuthenticated: !!JwtService.getToken()
}

const mutations = {
  setUser (state, user) {
    state.user = user
  },

  setAuth (state) {
    state.isAuthenticated = true
  },

  purgeAuth (state) {
    state.isAuthenticated = false
    state.user = {}
    JwtService.destroyToken()
  },

  setToken (state, token) {
    JwtService.saveToken(token)
  }
}

const actions = {
  checkAuth ({ commit, state }) {
    if (JwtService.getToken() && state.isAuthenticated) {
      ApiService.setHeader()
      commit('setAuth')
    } else {
      commit('purgeAuth')
    }
  },

  async login (context, params) {
    try {
      const { data } = await UserService.login(params)
      context.commit('setToken', data.data.access_token)
      return data
    } catch (error) {
      context.commit('setError', error.response.data)
      throw new Error(`[Error] ${error.response.data.message}`)
    }
  },

  getInfo (context) {
    return UserService.getInfo()
      .then(res => context.commit('setUser', res.data.data))
      .catch(error => context.commit('setError', error.response.data))
  },

  logout (context) {
    UserService.logout()
    context.commit('purgeAuth')
  }
}

export default {
  state,
  actions,
  mutations
}
