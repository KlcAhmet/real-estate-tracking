export default {
  state: () => ({
    allAppointments: null,
    isAllAppointmentsNull: true,
    filteredAppointments: null,
  }),
  mutations: {
    setFilteredAppointments(state, payload) {
      state.filteredAppointments = payload
    },
    setIsAllAppointmentsNull(state, payload) {
      state.isAllAppointmentsNull = payload
    },
    setAllAppointments(state, payload) {
      state.allAppointments = payload
    },
  },
  actions: {
    async getAppointment({ dispatch, commit, state }, path = '') {
      const response = await dispatch('getAirtable', {
        uri: '/Appointments' + path,
      })
      if (state.isAllAppointmentsNull) {
        commit('setAllAppointments', response?.data?.records)
        commit('setIsAllAppointmentsNull', !state.isAllAppointmentsNull)
      }

      commit('setFilteredAppointments', response?.data?.records)
    },
  },
  getters: {
    getFilteredAppointments(state) {
      return state.filteredAppointments
    },
    getAllAppointments(state) {
      return state.allAppointments
    },
  },
}
