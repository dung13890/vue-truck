import ApiService from './api.service'

export default {
  get () {
    return ApiService.get('/tasks')
  }
}
