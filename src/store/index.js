import { createStore } from 'vuex'
import appointment from '@/store/modules/appointment'

export default createStore({
  state: {},
  mutations: {},
  actions: {
    start({dispatch}) {
      dispatch('startAppointment')
    }
  },
  modules: {
    appointment: appointment,
  },
  getters: {},
})
