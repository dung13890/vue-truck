<template>
  <tbody>
    <tr v-for="(item, index) in items" :key="index">
      <td v-for="(column, index) in columns" :key="index">{{ dotGet(item, index) }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'dataTableBody',
  props: {
    items: {
      type: Array,
      required: true
    },
    columns: {
      type: Object,
      required: true
    }
  },
  methods: {
    dotGet (obj, path) {
      return path.split('.').reduce((o, i) => o[i], obj)
    }
  }
}
</script>
