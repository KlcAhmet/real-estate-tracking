export default {
  state: () => ({
    axiosOptions: null,
    appointment: null,
  }),
  mutations: {
    setAppointmentAxiosOptions(state, payload) {
      state.axiosOptions = payload
    },
    setAppointment(state, payload) {
      state.appointment = payload
    },
  },
  actions: {
    startAppointment({ commit, dispatch }) {
      commit('setAppointmentAxiosOptions', {
        baseURL: this.$env.VUE_APP_AIRTABLE_URL,
        timeout: 5000,
        headers: { Authorization: this.$env.VUE_APP_AIRTABLE_ACCESS_TOKEN },
      })
      dispatch('getAppointment')
    },
    async getAppointment({ state, commit }) {
      const data = (await this.$axios.get('/Appointments', state.axiosOptions))
        .data.records
      commit('setAppointment', data)
    },
  },
  getters: {
    getAppointment(state) {
      return state.appointment
    },
  },
}
