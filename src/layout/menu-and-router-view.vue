<template lang="pug">
.row.menuandrouter
  .col-2.pe-0(style="background-color: orange")
    Drawer
  .col-10
    router-view
</template>

<script>
import Drawer from '@/components/drawer'
export default {
  name: 'MenuAndRouterView',
  components: { Drawer },
}
</script>

<style lang="sass">
.menuandrouter
  height: 100vh
  margin: 0
</style>
