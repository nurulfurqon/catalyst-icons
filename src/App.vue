<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <Icons icon="unduhmutasi" size="large" color="black" />
  </div>
</template>

<script>
import Icons from './components'

export default {
  name: 'app',
  components: {
    Icons
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
