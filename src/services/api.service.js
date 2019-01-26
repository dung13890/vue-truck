import axios from 'axios'
import JwtService from '@/services/jwt.service'
import { API_URL } from '@/config'

export default {
  init () {
    axios.defaults.baseURL = API_URL
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios.defaults.headers.common['Accept'] = 'application/json'
  },

  setHeader () {
    axios.defaults.headers.common['Authorization'] = `Bearer ${JwtService.getToken()}`
  },

  post (resource, params) {
    return axios.post(`${resource}`, params)
  },

  get (resource) {
    return axios.get(`${resource}`)
  }
}
