<template lang="pug">
.row
  .col-6
    select.form-select(v-model.sync="selectAgent")
      option(value="Agent") Select Agent
      option(v-for="(item,index) in agents" :key="index"
        :value="item"
        )
        | {{item.fields.agent_name}} {{item.fields.agent_surname}}
  .col-6
    h6 Appointments:
    .row(v-if="!!selectedAgentAppointments")
      .col-12(v-for="(item,index) in selectedAgentAppointments" :key="index"
        style="border-bottom:1px solid"
        )
        p Contact Name: {{item.fields.contact_name[0]}}
        p Appointment Postcode: {{item.fields.appointment_postcode}}
        p Appointment Date:{{this.$moment(item.appointment?.fields?.appointment_date).format('DD-MM-YYYY HH.mm')}}
</template>

<script>
export default {
  name: 'agents',
  computed: {
    agents() {
      return this.$store.getters.getAgents
    },
    selectAgent: {
      set(value) {
        this.$store.dispatch('setSelectedAgent', {
          agent: Object.assign({}, value),
        })
      },
      get() {
        return this.selectedAgentData
      },
    },
    getAllAppointments() {
      if (!this.$store.getters.getAllAppointments) return null
      else return this.$store.getters.getAllAppointments
    },
    selectedAgent() {
      return this.$store.getters.getSelectedAgent
    },
    selectedAgentAppointments() {
      if (!this.getAllAppointments) return null
      else if (!this.selectedAgent) return null
      else
        return this.getAllAppointments.filter((appointment) => {
          return this.selectedAgent.fields.Appointments.some(
            (agentAppointments) => {
              return agentAppointments == appointment.id
            }
          )
        })
    },
  },
  data() {
    return {
      selectedAgentData: 'Agent',
    }
  },
  created() {
    this.$store.dispatch('getAgents')
  },
}
</script>

<style scoped></style>
