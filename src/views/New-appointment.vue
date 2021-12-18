<template lang="pug">
.container
  .row
    .col-12
      newappointmentContacts
</template>

<script>
import newappointmentContacts from '@/components/new appointment/newappointment-contacts'
export default {
  name: 'New-appointment',
  components: { newappointmentContacts },
}
</script>

<style scoped></style>
