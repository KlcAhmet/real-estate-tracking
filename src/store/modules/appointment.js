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
    async getAppointment({ dispatch, commit }, path = '') {
      const response = await dispatch('getAirtable', {
        uri: '/Appointments' + path,
      })
      commit('setAppointment', response?.data?.records)
    },
  },
  getters: {
    getAppointment(state) {
      return state.appointment
    },
  },
}
