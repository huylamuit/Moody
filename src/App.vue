<template>
  <div id="app">
    <NavBar />
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
    HomePage,
  },
//   mounted() {
//     document.getElementById("danh-gia").addEventListener("click",function(){
//   document.getElementsByClassName("third-section")[0].scrollIntoView({behavior: 'smooth'});
// })
// document.getElementById("trang-chu").addEventListener("click",function(){
//   document.getElementsByClassName("first-section")[0].scrollIntoView({behavior: 'smooth'});
// })
// document.getElementById("tinh-nang").addEventListener("click",function(){
//   document.getElementsByClassName("second-section")[0].scrollIntoView({behavior: 'smooth'});
// })
//   },
}

// window.addEventListener('wheel', function(event) {
//   if (event.deltaY < 0) {
//     document.querySelector('.navbar').classList.remove('hide');
//   } else {
//     document.querySelector('.navbar').classList.add('hide');
//   }
// });



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
  width: 100vw;

  height: max-content;
  background-image: linear-gradient(to bottom right, #6DADFA,rgb(119, 218, 254));
  margin: 0;
  padding: 0;

}
#app::-webkit-scrollbar:horizontal{
        background: #000;
        border-radius: 10px;
        height: 10px;
    }

.navbar{
  position: fixed;
  background-attachment: fixed;
  color: white;
  background-color: rgba(36, 46, 90, 0.736);
  top: 0;
  left: 0;
  right: 0;
  transition: top 0.3s;
}

@media (min-width: 992px) { 
  .hide{
      top: -90px;
  }    
}

</style>
