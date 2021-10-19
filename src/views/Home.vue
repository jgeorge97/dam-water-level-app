<template>
  <div>
    <div class="mt-5 has-text-info">
      <h2>Last Updated on : {{ lastUpdated }}</h2>
    </div>
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="card" v-for="dam in damData" v-bind:key="dam.slNo">
          <header class="card-header">
            <p class="card-header-title">
              {{ dam.name }}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>Current Water Level: {{ dam.currentWaterLevel }}</p>
              <p>Maximum allowed Water Level for today: {{ dam.currentDayMaxWaterLevel || "N/A" }}</p>
              <p>Dam Maximum Capacity: {{ dam.maxWaterLevel }}</p> 
              <p v-if="dam.remarks.length">Remarks: {{ dam.remarks }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="true"></b-loading>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      damData: [],
      lastUpdated: "",
      isLoading: false,
    }
  },
  components: {
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.isLoading = true
      let res = await fetch(process.env.VUE_APP_API_URL + '/dam/getData')
      let result = await res.json()
      this.damData = result.message
      this.lastUpdated = result.last_updated
      this.isLoading = false
    }
  }
};
</script>
<style>
  .card {
    margin-top: 0.45rem;
  }
</style>