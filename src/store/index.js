import { createStore } from 'vuex'
import appointment from '@/store/modules/appointment'
import airtableService from '@/store/services/airtable'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    appointment: appointment,
    airtableService: airtableService,
  },
  getters: {},
})
