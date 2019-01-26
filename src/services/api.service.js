import axios from 'axios'
import JwtService from '@/services/jwt.service'
import { API_URL } from '@/config'

export default {
  init () {
    axios.defaults.baseURL = API_URL
    axios.defaults.headers.common['Content-Type'] = 'application/json'
  },

  setHeader () {
    axios.defaults.headers.common['Authorization'] = `Token ${JwtService.getToken()}`
  },

  post (resource, params) {
    return axios.post(`${resource}`, params).catch(error => {
      throw new Error(`[ERROR] ApiService ${error}`)
    })
  },

  get (resource) {
    return axios.get(`${resource}`).catch(error => {
      throw new Error(`[ERROR] ApiService ${error}`)
    })
  }
}
