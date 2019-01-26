import ArticleService from '@/services/article.service'

const state = {
  articles: [],
  article: {}
}

const mutations = {
  setArticle (state, article) {
    state.article = article
  },

  setArticles (state, articles) {
    state.articles.push(...articles)
  }
}

const actions = {
  getArticles ({ commit }) {
    ArticleService.get()
      .then(res => commit('setArticles', res.data.data))
      .catch(error => commit('setError', error.response.data))
  }
}

export default {
  state,
  actions,
  mutations
}
