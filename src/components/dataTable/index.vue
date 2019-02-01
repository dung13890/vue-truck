<template>
  <div class="row">
    <div class="col-md-12">
      <div class="table-responsive">
        <table class="table table-striped table-bordered table-hover">
          <data-table-head :columns="columns" />
          <data-table-body :items="items" :columns="columns" />
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DataTableBody from './DataTableBody.vue'
import DataTableHead from './DataTableHead.vue'

export default {
  name: 'dataTable',
  props: {
    columns: {
      type: Object,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },

  components: {
    DataTableBody,
    DataTableHead
  }
}
</script>
