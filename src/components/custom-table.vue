<template lang="pug">
.col-12(colspan="12" v-if="!listItems.length")
  .text-center Loading Data
table.table.table-hover(v-else)
  thead
    tr
      th(scope="col") #
      th(scope="col" v-for="(item, index) in listHeaders"
        :key="index")
        .d-flex.align-items-center
          span {{item.name}}
          span.fas.fa-arrow-up(
              type="button"
              v-if="item.sort.value && item.sort.type"
              @click="listHeaders = item"
              ) 
          span.fas.fa-arrow-down(
              type="button"
              v-if="item.sort.value && !item.sort.type"
              @click="listHeaders = item"
              ) 
  tbody
    tr(
      v-for="(listItem, listItemIndex) in listItems" :key="listItemIndex"
      @click="selectedItem(listItem.originalValue)"
      role="button"
      )
      th(scope="row") {{listItemIndex}}
      td(
        v-for="(itemName, itemIndex) in Object.values(listItem).splice(0,Object.values(listItem).length-1)"
        :key="itemIndex"
        ) {{itemName}}
</template>

<script>
export default {
  name: 'custom-table',
  emits: ['sort'],
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
    listHeaders: {
      set(value) {
        this.listHeadersData = this.listHeadersData.map((header) => {
          if (value.key == header.key) {
            header.sort.type = !value.sort.type
          }
          return header
        })
        this.$emit('sort', {
          key: value.key,
          type: value.sort.type ? 'desc' : 'asc',
        })
      },
      get() {
        if (this.listHeadersData.length == 0)
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.listHeadersData = this.headers
        return this.listHeadersData
      },
    },
    listItems() {
      return this.items.map((items) => {
        let value = {}
        this.headers.forEach((headers) => {
          value[headers.key] = items[headers.key]
        })
        value.originalValue = items
        return value
      })
    },
  },
  data() {
    return {
      listHeadersData: [],
    }
  },
  methods: {
    selectedItem(item) {
      console.log(item)
    },
  },
}
</script>

<style scoped></style>
