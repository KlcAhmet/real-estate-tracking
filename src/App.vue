<template lang="pug">
MenuAndRouterView
</template>
<script>
import '@/assets/css/bootstrap.min.css'
// components
import MenuAndRouterView from '@/layout/menu-and-router-view'
export default {
  name: 'App',
  components: { MenuAndRouterView },
  created() {
    this.$store.dispatch('start')
  },
}
</script>
<style lang="scss"></style>
