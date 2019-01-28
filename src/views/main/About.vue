<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="(article, index) in articles" :key="index">
      <p>{{ article.title }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'about',
  methods: {

  },
  computed: {
    ...mapState({
      articles: state => state.article.articles
    })
  },
  created () {
    this.$store.dispatch('getArticles')
  }
}
</script>
