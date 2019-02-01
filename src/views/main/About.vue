<template>
  <div class="about">
    <h1>This is an about page</h1>
    <data-table
      :items="articles"
      :columns="columns"
    ></data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DataTable from '@/components/dataTable'
export default {
  name: 'about',
  data () {
    return {
      columns: {
        id: { label: 'Id' },
        title: { label: 'Title' },
        note: { label: 'Note', sortable: true },
        target: { label: 'Target', sortable: true }
      }
    }
  },
  computed: {
    ...mapState({
      articles: state => state.article.articles
    })
  },
  components: {
    DataTable
  },
  created () {
    this.$store.dispatch('getArticles')
  }
}
</script>
