import { Loader } from '@googlemaps/js-api-loader'

export default {
  state: () => ({
    headers: {
      baseURL: 'https://api.postcodes.io',
      timeout: 5000,
    },
    loadingLonLat: false,
    loadingPostcode: false,
    postcodes: [],
    destination: null,
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
    setDestination(state, payload) {
      state.destination = payload
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
        const { longitude, latitude } = response.data.result

        const loader = new Loader({
          apiKey: this.$env.VUE_APP_GOOGLE_MAPS_JAVA_SCRIPT_API,
          version: 'weekly',
          libraries: ['places'],
        })

        loader.load().then((google) => {
          // initialize services
          const service = new google.maps.DistanceMatrixService()
          // build request
          const request = {
            origins: [new google.maps.LatLng(51.729157, 0.478027)],
            destinations: [new google.maps.LatLng(latitude, longitude)],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
          }
          service
            .getDistanceMatrix(request)
            .then((response) => {
              commit('setDestination', response)
            })
            .catch((e) => {
              console.log('map error: ', e)
            })
        })

        commit('setLoadingPostcode', false)
      } catch (err) {
        commit('setLoadingPostcode', false)
      }
    },
    async getPostcodePostcodeReturn({ commit, state }, { postcode }) {
      try {
        const response = await this.$axios.get(
          `postcodes/${postcode}`,
          state.headers
        )
        const { longitude, latitude } = response.data.result

        const loader = new Loader({
          apiKey: this.$env.VUE_APP_GOOGLE_MAPS_JAVA_SCRIPT_API,
          version: 'weekly',
          libraries: ['places'],
        })

        loader.load().then((google) => {
          // initialize services
          const service = new google.maps.DistanceMatrixService()
          // build request
          const request = {
            origins: [new google.maps.LatLng(51.729157, 0.478027)],
            destinations: [new google.maps.LatLng(latitude, longitude)],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
          }
          service
            .getDistanceMatrix(request)
            .then((response) => {
              return response
            })
            .catch((e) => {
              console.log('map error: ', e)
            })
        })

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
    getDestination(state) {
      return state.destination
    },
  },
}
