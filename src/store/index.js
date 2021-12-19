import { createStore } from 'vuex'
import appointment from '@/store/modules/appointment'
import airtableService from '@/store/services/airtable'
import newcontact from '@/store/modules/newcontact'
import postcodesIo from '@/store/services/postcodes-io'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    appointment: appointment,
    airtableService: airtableService,
    newcontact: newcontact,
    postcodesIo: postcodesIo,
  },
  getters: {},
})
