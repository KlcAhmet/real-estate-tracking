<template lang="pug">
.col-12(colspan="12" v-if="!listItems.length")
  .text-center Loading Data
table.table(v-else)
  thead
    tr
      th(scope="col") #
      th(scope="col" v-for="(item, index) in listHeaders" :key="index")
        label {{item.name}}
          button.btn.btn-primary.btn-sm(type="button" v-if="item.short") UP
  tbody
    tr(v-for="(listItem, listItemIndex) in listItems" :key="listItemIndex")
      th(scope="row") {{listItemIndex}}
      td(v-for="(itemName, itemIndex) in Object.values(listItem)" :key="itemIndex")
        | {{itemName}}
</template>

<script>
export default {
  name: 'custom-table',
  props: {
    items: {
      type: Array,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
  },
  computed: {
    listHeaders() {
      return this.headers.map((headers) => {
        return { name: headers.name, short: headers.short }
      })
    },
    listItems() {
      return this.items.map((items) => {
        let value = {}
        this.headers.forEach((headers) => {
          value[headers.key] = items[headers.key]
        })
        return value
      })
    },
  },
}
</script>

<style scoped></style>
