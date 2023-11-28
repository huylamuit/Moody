<template>
  <div class="sidebar">
      <button @click="goBack" id="BackToHome">
        Về trang giới thiệu
      </button>
  </div>
</template>

<script>

    export default {
        name: 'SideBar',
        methods:{
          goBack(){
            location.href='../'
            console.log("hehe")
          }
        }

    }
</script>

<style>
.sidebar{
  width: 15%;
  height: 100vh;
  margin-right: 10px;
  background-color: #121212;
  border-radius: 30px;
}
</style>