<template>
  <div id="app">
    <div id="nav">
      <b-navbar type="is-primary">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Dam Water Level Status 
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                About
            </b-navbar-item>
        </template>
      </b-navbar>
    </div>
    <router-view />
    <div id="footer">
      <footer class="footer">
        <div class="content has-text-centered">
            <p>
              <strong>Dam Water Level Status App</strong> by <a href="https://github.com/jgeorge97" target="_blank">George Martin Jose</a>. Data Source: <a href="https://sdma.kerala.gov.in/dam-water-level/">KSDMA</a> & <a href="https://www.tnagrisnet.tn.gov.in/" target="_blank" rel="noopener noreferrer">AGRISNET</a>.
            </p>
          </div>
        </footer>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
