<template>
    <div id="music-app">
      <SideBar>

      </SideBar>
    
      <div class="content">
      
        <div class="slide">
          <img src="https://i.pinimg.com/originals/ff/16/01/ff160152754a2732ccb91c8aa63b34cc.jpg" alt="" class="slide_img">
          <div class="slide_description">
            <h1>Hòa mình vào <br> không khí Giáng Sinh </h1>
            <p class="description"> 
              Chào mừng mùa Giáng Sinh ấm áp! 🎄✨ Đã đến lúc để hòa mình vào không khí tràn ngập hạnh phúc và niềm vui. 
              Bật nhạc là một cách tuyệt vời để tận hưởng khoảnh khắc này, và chúng tôi đã chuẩn bị một playlist Giáng Sinh đặc biệt chỉ dành riêng cho bạn!
            </p>
          </div>
        </div>
        <div class="list">
          <h1>Mới Phát Gần Đây</h1>
          <div class="song_list">
            <div  v-for="(song,index) in recent" :key="index">
              <SongCard :SongName="song.SongName" :Singer="song.Singer" :img="song.img" @play="play"/>
            </div>
          </div>
          <h1>Đề Xuất Hôm Nay</h1>
          <div class="song_list">
            <div  v-for="(song,index) in recent" :key="index">
              <SongCard :SongName="song.SongName" :Singer="song.Singer" :img="song.img" @play="play"/>
            </div>
          </div>
          <h1>Đang Thịnh Hành</h1>
          <div class="song_list">
            <div  v-for="(song,index) in recent" :key="index">
              <SongCard :SongName="song.SongName" :Singer="song.Singer" :img="song.img" @play="play"/>
            </div>
          </div>
        </div>
        
      </div>
  
      <PlayBar :SongName="nowPlaying.SongName" :Singer="nowPlaying.Singer" :length="nowPlaying.length" :src="nowPlaying.src" :img="nowPlaying.img"/>


    
    </div>
  </template>

  <script >


  import SongCard from '../components/mocules/SongCard.vue';
  import PlayBar from '../components/PlayBar.vue';
  import SideBar from '../components/SideBar.vue'


  export default {
    name: 'App',
    components: {
      SongCard,
      PlayBar,
      SideBar,
    },
    data(){
      return {
        nowPlaying:{
          SongName: 'Em Trang Trí',
          Singer: 'Ngọt',
          length: 208,
          src: 'C:\\Users\\ADMIN\\Desktop\\Moody\\src\\assets\\audio\\ETT.mp3',
          img: 'gieo.jpg'
        },
        recent:[
          {SongName: 'Đánh Đổi', Singer: 'Obito, MCK', img: 'danhdoi.jpg'},
          {SongName: 'Em Trang Trí', Singer: 'Ngọt', img: 'gieo.jpg'},
          {SongName: 'All I Want For Christmas Is You', Singer: 'Mariah Carey', img:'all i want for christmas is you.jpg' },
          {SongName: 'Trước Khi Em Tồn Tại', Singer: 'Thắng', img:'caidautien.jpg'},
          {SongName: 'Tình Yêu Xanh Lá', Singer: 'Thịnh Suy', img:'tinhyeuxanhla.jpg'},
          {SongName: 'Đông Kiếm Em', Singer: 'Vũ.', img: 'dongkiemem.jpg'},
  
        ]

      }
    },
    methods:{
      play(song){
        this.nowPlaying.SongName = song[0]
        this.nowPlaying.Singer = song[1]
        this.nowPlaying.img = song[2]
        this.$emit('play')
      
      }
    }
  }

  </script>

  <style>
  @font-face {
    font-family: Nunito;
    src: url('../assets/font/Nunito-VariableFont_wght.ttf');
}

  #music-app {
    font-family: Nunito;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    background-color: black;
    margin: 0;
  
    display: flex;
   

  }

  .content{
    width: 85%;
    overflow-y: auto;
    height: 90vh;
    border-radius: 30px;
    background-color: #121212;
    padding: 0 0 30px 0;
    overflow-x:clip;
  }
  .slide{
    position: relative;
    width: 97%;
    height: 500px;
    color: white;
    margin:20px;
    border-radius: 10px ;
    overflow: hidden;
  
  }
  .slide_img{
    width: 100%;
    height: 100%;
  }
  .slide_description{
    color: white;
    position: absolute;

    bottom: 0px;
    text-align: left;
    padding: 20px;

  }
  .description{
    display: none;
    width: 60%;
    font-size: 18px;

  }
  .slide:hover .description{
    display: block;

  }
  .slide:hover .slide_description{
    background-color: rgba(117, 117, 117, 0.7);
    height: 100%;
    cursor: pointer;
    
    

  }
  .list{
    margin: 20px;
    text-align: left;
    color: white;
  }
  .song_list{
    display: flex;
    justify-content:space-between ;
    flex-direction: row;
    flex-flow: wrap;
    margin: 30px 0;
  }
  h1{
    margin: 40px 0 20px 0;
    font-size: 32px;
    color: white;
  }
  .content::-webkit-scrollbar {
    height: 80vh;
    width: 10px;
  }
  .content::-webkit-scrollbar-thumb {
    background: rgba(92, 92, 92, 0.9);
  }
  .content::-webkit-scrollbar-thumb {
      border-radius: 5px;
      border-right: none;
      border-left: none;
  }






  </style>
