<template lang="pug">
AppointmentList
</template>

<script>
import AppointmentList from '@/components/appointment/appointment-list'
export default {
  name: 'Appointment',
  components: { AppointmentList },
  created() {
    this.$store.dispatch('getAppointment')
  },
}
</script>

<style scoped></style>
