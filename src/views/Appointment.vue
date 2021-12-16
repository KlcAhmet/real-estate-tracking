<template lang="pug">
div Appointment
</template>

<script>
export default {
  name: 'Appointment',
  created() {
    this.$store.dispatch('getAppointment')
  },
}
</script>

<style scoped></style>
