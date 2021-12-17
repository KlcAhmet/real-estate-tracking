<template lang="pug">
CustomTable(:items="list" :headers="headers")
</template>

<script>
import CustomTable from '@/components/custom-table'
export default {
  name: 'appointment-list',
  components: { CustomTable },
  computed: {
    list: {
      set(value) {
        console.log(value)
      },
      get() {
        if (!this.$store.getters.getAppointment) return []
        else
          return this.$store.getters.getAppointment.map((appointment) => {
            return {
              createdTime: this.$moment(
                appointment?.createdTime,
                'YYYY-MM-DD HH.mm'
              )
                .utc()
                .format('DD-MM-YYYY HH.mm'),
              agend_id: appointment?.fields?.agend_id,
              agent_name: appointment?.fields?.agent_name.join(' '),
              agent_surname: appointment?.fields?.agent_surname.join(' '),
              appointment_date: this.$moment(
                appointment?.fields?.appointment_date,
                'YYYY-MM-DD HH.mm'
              )
                .utc()
                .format('DD-MM-YYYY HH.mm'),
              appointment_id: appointment?.fields?.appointment_id,
              appointment_postcode: appointment?.fields?.appointment_postcode,
              contact_email: appointment?.fields?.contact_email.join('\n'),
              contact_id: appointment?.fields?.contact_id.join('\n'),
              contact_name: appointment?.fields?.contact_name.join('\n'),
              contact_phone: appointment?.fields?.contact_phone.join('\n'),
              contact_surname: appointment?.fields?.contact_surname.join('\n'),
              id: appointment?.id,
            }
          })
      },
    },
    headers() {
      return [
        { key: 'createdTime', name: 'Created Time', short: false },
        { key: 'agent_name', name: 'Agent Name', short: false },
        { key: 'agent_surname', name: 'Agent Surname', short: false },
        { key: 'appointment_date', name: 'Appointment Date', short: true },
        {
          key: 'appointment_postcode',
          name: 'Appointment Post Code',
          short: false,
        },
        { key: 'contact_email', name: 'Contact Email', short: false },
        { key: 'contact_name', name: 'Contact Name', short: false },
        { key: 'contact_phone', name: 'Contact Phone', short: false },
        { key: 'contact_surname', name: 'Contact Surname', short: false },
      ]
    },
  },
}
</script>

<style scoped></style>
