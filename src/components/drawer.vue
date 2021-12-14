<template lang="pug">
.row.sticky-top
  .d-grid.gap-2.col-11.mx-auto.my-5
    button.btn.btn-primary(type="button" @click="go('/')") Dashboard
    button.btn.btn-primary(type="button" @click="go('/newappointment')")
      | Yeni randevu oluştur
    button.btn.btn-primary(type="button" @click="go('/appointment')") Randevular
</template>

<script>
export default {
  name: 'Drawer',
  methods: {
    go(route) {
      this.$router.push(route)
    },
  },
}
</script>

<style scoped></style>
