export default {
  state: () => ({
    agents: null,
    selectedAgent: null,
    selectedAgentsAppointments: null,
  }),
  mutations: {
    setAgents(state, payload) {
      state.agents = payload
    },
    setSelectedAgent(state, payload) {
      state.selectedAgent = payload
    },
  },
  actions: {
    async getAgents({ dispatch, commit }, path = '') {
      const response = await dispatch('getAirtable', {
        uri: '/Agents' + path,
      })
      commit('setAgents', response.data?.records)
    },
    async setSelectedAgent({ commit, dispatch }, { agent }) {
      commit('setSelectedAgent', agent)
      dispatch('getAppointment')
    },
  },
  getters: {
    getAgents(state) {
      return state.agents
    },
    getSelectedAgent(state) {
      return state.selectedAgent
    },
  },
}
