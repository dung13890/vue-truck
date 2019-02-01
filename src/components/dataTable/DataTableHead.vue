<template>
  <thead>
    <tr v-if="columns">
       <th v-for="(column, index) in columns" :key="index">{{ column.label }}</th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'dataTableHead',
  props: {
    columns: {
      type: Object,
      required: true
    }
  }
}
</script>
