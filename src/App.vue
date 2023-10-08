<template>
  <div id="app">
    <NavBar />
    <SongCard />

  </div>
</template>

<script>

import SongCard from './components/SongCard.vue'
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar,
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
