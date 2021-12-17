<template lang="pug">
.row
  .col-12
    .input-group
      input.form-control(v-model.trim="searchInput" @keyup.enter="search"
        type="text" placeholder="Search Agent"
        )
      button.btn.btn-outline-secondary(@click="search" type="button") Search
      button.btn.btn-outline-secondary(@click="getAllData" type="button") All
</template>

<script>
export default {
  name: 'appointment-filter',
  data() {
    return {
      searchInput: '',
    }
  },
  methods: {
    search() {
      this.$store.dispatch(
        'getAppointment',
        `?filterByFormula=({agent_name}='${this.searchInput}')`
      )
      this.searchInput = ''
    },
    getAllData() {
      this.$store.dispatch('getAppointment')
    },
  },
}
</script>

<style scoped></style>
