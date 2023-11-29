<template>
  <div class="sidebar">
    <div class="sidebar_option">
      <div class="button">
        <font-awesome-icon :icon="['fas', 'home']" size="xs" />
        <p class="option_title"><a href="/music-app">Trang chủ</a></p>
      </div>
      <div class="button">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" size="xs" />
        <p class="option_title" @click="emitSearch($event)">Tìm kiếm</p>
      </div>
    </div>
    <div class="lib">
      <h2>Thư viện</h2>
   
      <div class="button">
        <img src="../assets/img/ngot.jpg" alt="">
        <div class="cate_info">
          <p class="cate_name"><b><a href="">Bài hát đã thích</a></b></p>
          <p class="song_num">3 bài</p>

        </div>
        
      </div>
      <div class="button">
        Về trang giới thiệu
      </div>

    </div>
      
    
  </div>
</template>

<script>

    export default {
        name: 'SideBar',
        methods:{
          goBack(){
            location.href='../'
            console.log("hehe")
          },
          emitSearch($event){
            $event.preventDefault()
            this.emitter.emit('toggleSearch')
            console.log("hehe")
          }
        }

    }
</script>

<style>
.sidebar{
  width: 15%;
  height: 90vh;
  margin-right: 10px;
  background-color: #121212;
  border-radius: 30px;
  text-align: center;
  padding:10px;

}

.sidebar .button{
  width: 100%;
  height: 70px;
  font-size: 18px;
  background-color: #121212;
  color: white;
  border:none;
  font-weight:600;
  border-radius: 10px;
  padding:20px;
  display: flex;
  align-items: center;
  justify-content: center;

}
.sidebar h2{
  text-align: left;
  margin: 20px;
  font-size: 1.2rem;
  font-weight: 800;
  color: grey;
}

.sidebar .button:hover{
  background-color: #1d1d1d;
  cursor: pointer;
}

.button img{
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.button p,a{
  font-size: 16px;
  color: white;
  text-decoration: none;
}

.sidebar_option .button{
  height: 20px;
  justify-content: flex-start;
}
.sidebar_option .option_title{
  margin: 0 10px;
  font-size: 16px;
}



</style>