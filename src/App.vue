<template>
  <div id="app">
    <SongCard />

  </div>
</template>

<script>

import SongCard from './components/SongCard.vue'
export default {
  name: 'App',
  components: {

    SongCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
