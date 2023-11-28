<template>
  <div id="app">
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue';
import HomePage from './components/pages/HomePage.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HomePage

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
  color: white;
  background-color: #242e5a;
  top: 0;
  left: 0;
  right: 0;
}


</style>
