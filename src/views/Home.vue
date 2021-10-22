<template>
  <div id="home">
    <b-tabs type="is-toggle" position="is-centered" expanded class="">
      <b-tab-item label="KSEB Dams">
        <KSEB />
      </b-tab-item>
      <b-tab-item label="Irrigation Dams">
        <Irrigation />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import KSEB from '../components/KSEB.vue'
import Irrigation from '../components/Irrigation.vue'

export default {
  name: 'Home',
  components: {
    KSEB,
    Irrigation,
  }
}
</script>

<style>
  .tabs {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  #home {
    text-align: center;
  }
</style>