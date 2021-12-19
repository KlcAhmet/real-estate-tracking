<template lang="pug">
.row.h-100.d-flex.align-items-center
  .col-12.d-flex.justify-content-center(v-if="getPostcodesLoadingLonLat") loading
  .col-12.d-flex.justify-content-center(v-else-if="!getPostcodes ||getPostcodes.length == 0") veri yok 2
  .col-12(v-else)
    h4 {{getPostcodes[0]?.admin_district}}
    h6 {{getPostcodes[0]?.admin_ward}}
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

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'newappointment-address',
  computed: {
    ...mapGetters(['getPostcodesLoadingLonLat', 'getPostcodes']),
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
