<template lang="pug">
#map
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader'
export default {
  name: 'googlemap',
  data() {
    return {
      google: null,
      map: null,
      marker: null,
      markers: [],
    }
  },
  mounted() {
    this.createMap()
  },
  methods: {
    createMap() {
      const loader = new Loader({
        apiKey: process.env.VUE_APP_GOOGLE_MAPS_JAVA_SCRIPT_API,
        version: 'weekly',
        libraries: ['places'],
      })
      const mapOptions = {
        center: {
          lat: 53.996025,
          lng: -1.295068,
        },
        zoom: 11, //default 6
      }
      loader
        .load()
        .then((google) => {
          this.map = new google.maps.Map(
            document.getElementById('map'),
            mapOptions
          )
          // eslint-disable-next-line no-unused-vars
          this.map.addListener('click', (event) => {
            this.$store.dispatch('getPostcodeLonLat', {
              lon: event.latLng.lng(),
              lat: event.latLng.lat(),
            })
          })
        })
        .catch((e) => {
          console.log('map error: ', e)
        })
    },
  },
}
</script>

<style scoped lang="sass">
#map
  height: 100%
</style>
