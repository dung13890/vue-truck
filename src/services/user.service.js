import ApiService from './api.service'

export default {
  register (params) {
    return ApiService.post('/users', { user: params })
  },

  getAuth () {
    return ApiService.get('/user')
  }
}
