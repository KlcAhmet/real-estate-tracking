export default {
  state: () => ({}),
  mutations: {},
  actions: {
    /*eslint no-unused-vars: "off"*/
    async getAirtable({ dispatch }, { uri }) {
      const headers = {
        baseURL: this.$env.VUE_APP_AIRTABLE_URL,
        timeout: 5000,
        headers: { Authorization: this.$env.VUE_APP_AIRTABLE_ACCESS_TOKEN },
      }
      try {
        const response = await this.$axios.get(uri, headers)
        return response
      } catch (err) {
        //todo will add message
      }
    },
  },
  getters: {},
}
