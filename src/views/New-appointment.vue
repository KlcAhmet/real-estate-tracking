<template lang="pug">
.container
  .row
    .col-12
      newappointmentContacts
    .col-12.mt-4
      .row.googlemap
        .col-6
          googlemap
        .col-6
          newappointmentAddress
    .col-12.mt-4
      agents
</template>

<script>
import newappointmentContacts from '@/components/new appointment/newappointment-contacts'
import googlemap from '@/components/google map/googlemap'
import newappointmentAddress from '@/components/new appointment/newappointment-address'
import agents from '@/components/agents/agents'
export default {
  name: 'New-appointment',
  components: {
    newappointmentContacts,
    googlemap,
    newappointmentAddress,
    agents,
  },
}
</script>

<style scoped lang="sass">
.googlemap
  height: 500px
  max-height: 500px
</style>
