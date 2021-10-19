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
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
      </b-navbar>
    </div>
    <router-view />
    <div id="footer">
      <footer class="footer">
        <div class="content has-text-centered">
            <p>
              <strong>Dam Water Level Status App</strong> by <a href="https://jgthms.com">George Martin Jose</a>. The source code is listed on <a href="https://github.com/jgeorge97">Github</a>. Data by <a href="https://sdma.kerala.gov.in/dam-water-level/">KSDMA</a>.
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
  text-align: center;
  color: #2c3e50;
}
</style>
