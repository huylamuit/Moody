<template>
  <div id="app">
    <SongCard/>
    <PlayBar/>
  </div>
</template>

<script>

import SongCard from './components/SongCard.vue';
import PlayBar from './components/PlayBar.vue';

export default {
  name: 'App',
  components: {
    SongCard,
    PlayBar

  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 1000px;
  background-color: rgb(36, 36, 36);
  margin: 0;
  padding: 0;
  

}

.navbar{
  position: fixed;
  background-attachment: fixed;
  background-color: aqua;
  top: 0;
  left: 0;
  right: 0;
}


</style>
