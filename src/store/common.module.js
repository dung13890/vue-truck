const state = {
  error: {
    status: 200,
    messages: []
  }
}

const getters = {
  getError: state => state.error
}

const mutations = {
  setError (state, error) {
    state.error.status = error.status
    state.error.messages = error.messages
  },

  purgeError (state) {
    state.error = {
      status: 200,
      messages: []
    }
  }
}

export default {
  state,
  getters,
  mutations
}
