<template lang="pug">
CustomTable(:items="list" :headers="headers" @sort="sort")
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
              createdTime: this.$moment(appointment?.createdTime).format(
                'DD-MM-YYYY HH.mm'
              ),
              agend_id: appointment?.fields?.agend_id,
              agent_name: appointment?.fields?.agent_name.join(' '),
              agent_surname: appointment?.fields?.agent_surname.join(' '),
              appointment_date: this.$moment(
                appointment?.fields?.appointment_date
              ).format('DD-MM-YYYY HH.mm'),
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
        {
          key: 'createdTime',
          name: 'Created Time',
          sort: {
            value: false,
            type: false,
          },
        },
        {
          key: 'agent_name',
          name: 'Agent Name',
          sort: {
            value: false,
            type: false,
          },
        },
        {
          key: 'agent_surname',
          name: 'Agent Surname',
          sort: {
            value: false,
            type: false,
          },
        },
        {
          key: 'appointment_date',
          name: 'Appointment Date',
          sort: {
            value: true,
            type: false,
          },
        },
        {
          key: 'appointment_postcode',
          name: 'Appointment Post Code',
          sort: {
            value: false,
            type: false,
          },
        },
        {
          key: 'contact_email',
          name: 'Contact Email',
          sort: {
            value: false,
            type: false,
          },
        },
        {
          key: 'contact_name',
          name: 'Contact Name',
          sort: {
            value: false,
            type: false,
          },
        },
        {
          key: 'contact_phone',
          name: 'Contact Phone',
          sort: {
            value: false,
            type: false,
          },
        },
        {
          key: 'contact_surname',
          name: 'Contact Surname',
          sort: {
            value: false,
            type: false,
          },
        },
      ]
    },
  },
  methods: {
    sort({ key, type }) {
      this.$store.dispatch(
        'getAppointment',
        `?sort%5B0%5D%5Bfield%5D=${key}&sort%5B0%5D%5Bdirection%5D=${type}`
      )
    },
  },
}
</script>

<style scoped></style>
