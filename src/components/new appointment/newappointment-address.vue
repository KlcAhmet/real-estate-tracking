<template lang="pug">
.row.h-100
  .col-12.d-flex.justify-content-center(v-if="getPostcodesLoadingLonLat") loading
  .col-12.d-flex.justify-content-center(v-else-if="!getPostcodes ||getPostcodes.length == 0") veri yok 2
  .col-12(v-else)
    h4 {{getPostcodes[0]?.admin_district}}
    h6 {{getPostcodes[0]?.admin_ward}}
    h6 {{getPostcodes[0]?.parish}}
    span select postcodes:
    .btn-group.btn-group-sm(role="group")
      template(v-for="(item,index) in getPostcodes"
        :key="index"
        )
        input.btn-check(
          type="radio" name="btnradio" :id="`btnradio${index}`" autocomplete="off"
          @click="selectedPostcode = item.postcode"
          :checked="selectedPostcode == item.postcode"
          )
        label.btn.btn-outline-primary(:for="`btnradio${index}`")
          | {{item.postcode}}
    .row.mt-3(v-if="getDestination")
      .col-12
        h6 Destination Address:
        p.ms-2 {{getDestination.destinationAddresses[0]}}
        h6 Origin Address:
        p.ms-2 {{getDestination.originAddresses[0]}}
      .col-12
        p Distance: {{getDestination.rows[0].elements[0].distance.text}}
      .col-12
        p Duration: {{getDestination.rows[0].elements[0].duration.text}}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'newappointment-address',
  computed: {
    ...mapGetters([
      'getPostcodesLoadingLonLat',
      'getPostcodes',
      'getDestination',
    ]),
    selectedPostcode: {
      set(value) {
        this.$store.commit('setSelectedPostcode', value)
        this.$store.dispatch('getPostcodePostcode', { postcode: value })
      },
      get() {
        return this.$store.getters.getSelectedPostcode
      },
    },
  },
}
</script>

<style scoped></style>
