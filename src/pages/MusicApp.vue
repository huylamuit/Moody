<template>
    <div id="music-app">
      <SideBar>

      </SideBar>
    
      <div class="content">
        <ImgSlider></ImgSlider>
        <div class="list">
          <div class="list_title">
              <h1>Mới Phát Gần Đây</h1>
              <a href="/music-app/section" class="end">xem thêm</a>
          </div>
          <div class="song_list">
          
            <div  v-for="(song,index) in recent" :key="index">
              <SongCard :SongName="song.SongName" :Singer="song.Singer" :img="song.img" @play="play"/>
            </div>
          </div>
          <div class="list_title">
              <h1>Đề xuất cho bạn</h1>
              <a href="/music-app/section" class="end">xem thêm</a>
          </div>
          <div class="song_list">
          
            <div  v-for="(song,index) in recent" :key="index">
              <SongCard :SongName="song.SongName" :Singer="song.Singer" :img="song.img" @play="play"/>
            </div>
          </div>
          <div class="list_title">
              <h1>Top thịnh hành</h1>
              <a href="/music-app/section" class="end">xem thêm</a>
          </div>
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


  import ImgSlider from '@/components/mocules/ImgSlider.vue';
import SongCard from '../components/mocules/SongCard.vue';
  import PlayBar from '../components/PlayBar.vue';
  import SideBar from '../components/SideBar.vue'


  export default {
    name: 'App',
    components: {
    SongCard,
    PlayBar,
    SideBar,
    ImgSlider
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

  .list{
    margin: 20px;
    text-align: left;
    color: white;
  }
  .list_title{
    display: flex;
    align-items: flex-end;
    color: white;
    padding: 0 20px;

}

  .song_list{
    display: flex;
    justify-content:space-between ;
    flex-direction: row;
    flex-flow: wrap;
    margin: 10px 0;
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
