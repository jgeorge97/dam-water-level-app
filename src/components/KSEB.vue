<template>
  <div>
    <div class="mt-5 has-text-info">
      <h2>Last Updated on : {{ lastUpdated }}</h2>
    </div>
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="card" v-for="dam in damData" v-bind:key="dam.slNo">
          <header class="card-header">
            <p class="card-header-title is-size-5">
              {{ dam.name }}
            </p>
          </header>
          <div class="card-content">
            <nav class="level">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Current Water Level</p>
                  <p class="title">{{ dam.currentWaterLevel }}</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Dam Maximum Capacity</p>
                  <p class="title">{{ dam.maxWaterLevel }}</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Dam Storage Percent</p>
                  <p class="title">{{ dam.percentStorage }}</p>
                </div>
              </div>            
            </nav>
            <nav class="level" v-if="dam.spillAmount">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Spill Amount</p>
                  <p class="title">{{ dam.spillAmount }} cumecs</p>
                </div>
              </div>
            </nav>
            <div v-if="dam.remarks">
              <nav class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Remarks</p>
                  </div>
                </div>
              </nav>
              <div class="content is-size-7 remarks">{{dam.remarks}}</div>
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
  name: "KSEB",
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
      try {
        this.isLoading = true
        let res = await fetch(process.env.VUE_APP_API_URL + '/dam/getData')
        let result = await res.json()
        this.damData = result.message
        this.lastUpdated = result.last_updated
        this.isLoading = false
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
<style>
  .card {
    margin-top: 0.45rem;
  }
  .remarks {
    margin-top: -20px;
  }
</style>