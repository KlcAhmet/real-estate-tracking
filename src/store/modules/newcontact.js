export default {
  state: () => ({
    contact: {
      contact_name: '',
      contact_surname: '',
      contact_email: '',
      contact_phone: '',
      Appointments: [],
    },
    selectedPostcode: '',
  }),
  mutations: {
    setContact(state, payload) {
      state.contact = payload
    },
    setSelectedPostcode(state, payload) {
      state.selectedPostcode = payload
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    setContactKeyAndValue({ commit, state }, { key, value }) {
      state.contact[key] = value
      commit('setContact', state.contact)
    },
  },
  getters: {
    getContact(state) {
      return state.contact
    },
    getSelectedPostcode(state) {
      return state.selectedPostcode
    },
  },
}
