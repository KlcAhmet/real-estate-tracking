export default {
  state: () => ({
    appointment: null,
  }),
  mutations: {
    setAppointment(state, payload) {
      state.appointment = payload
    },
  },
  actions: {
    async getAppointment({ dispatch, commit }) {
      const response = await dispatch('getAirtable', { uri: '/Appointments' })
      commit('setAppointment', response?.data?.records)
    },
  },
  getters: {
    getAppointment(state) {
      return state.appointment
    },
  },
}
