import ApiService from './api.service'

export default {
  logout () {
    return ApiService.post('/logout')
  },

  login (params) {
    return ApiService.post('/login', params)
  },

  getInfo () {
    return ApiService.get('/info')
  }
}
