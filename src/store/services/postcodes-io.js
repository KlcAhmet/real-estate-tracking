export default {
  state: () => ({
    headers: {
      baseURL: 'https://api.postcodes.io',
      timeout: 5000,
    },
    loadingLonLat: false,
    loadingPostcode: false,
    postcodes: [],
  }),
  mutations: {
    setLoadingLonLat(state, payload) {
      state.loadingLonLat = payload
    },
    setLoadingPostcode(state, payload) {
      state.loadingPostcode = payload
    },
    setPostCodes(state, payload) {
      state.postcodes = payload
    },
  },
  actions: {
    async getPostcodeLonLat({ commit, state }, { lon, lat }) {
      commit('setLoadingLonLat', true)
      try {
        const response = await this.$axios.get(
          `postcodes?lon=${lon}&lat=${lat}`,
          state.headers
        )
        commit('setPostCodes', response.data.result)
        commit('setLoadingLonLat', false)
      } catch (err) {
        commit('setLoadingLonLat', false)
      }
    },
    async getPostcodePostcode({ commit, state }, { postcode }) {
      commit('setLoadingPostcode', true)
      try {
        const response = await this.$axios.get(
          `postcodes/${postcode}`,
          state.headers
        )
        console.log('longitude', response.data.result.longitude)
        console.log('latitude', response.data.result.latitude)
        commit('setLoadingPostcode', false)
      } catch (err) {
        commit('setLoadingPostcode', false)
      }
    },
  },
  getters: {
    getPostcodesLoadingLonLat(state) {
      return state.loadingLonLat
    },
    getPostcodesLoadingPostcode(state) {
      return state.loadingPostcode
    },
    getPostcodes(state) {
      return state.postcodes
    },
  },
}
