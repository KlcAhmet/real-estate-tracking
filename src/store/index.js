import { createStore } from 'vuex'
import appointment from '@/store/modules/appointment'
import airtableService from '@/store/services/airtable'
import newcontact from '@/store/modules/newcontact'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    appointment: appointment,
    airtableService: airtableService,
    newcontact: newcontact,
  },
  getters: {},
})
