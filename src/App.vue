<template>
  <div id="app">
    <NavBar class="navbar"/>
    <HomePage />

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
