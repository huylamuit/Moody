<template>
    <div id="track">
        <SideBar>
        </SideBar>
        <div class="content">
            <div class="header">
                <img :src="require('../assets/img/' + 'gieo.jpg')" alt="">
                <div class="info">
                    <p><b>Bài hát</b></p>
                    <h1>Em trang trí</h1>
                    <p class = "Artist"><Strong>Ngọt</Strong></p>
                </div>
            </div>
            <SongOption></SongOption>
            <div class="content_wrapper">
                <div class="lyrics_contain">
                    <h2>Lời bài hát</h2>
                    <div class="lyrics" >
                        <p  v-for="(lyric,index) in nowPlaying.lyrics  " :key="index"  @click="emitTime(lyric.time)" :class="{ 'target': lyric.isPlayed }" ref="playing" >{{ lyric.text }}</p>
                    </div>
                </div>
                <div class="artist">
                    <img :src="require('../assets/img/' + 'ngot.jpg')" alt="" id="artist_avt">
                    <div class="artist_info">
                        <p>Ban nhạc</p>
                        <a href="/music-app/artist">Ngọt</a>
                    </div>
                </div>
            </div>
           
            <div class="suggest">
                <h2 id="suggest_title">Đề Xuất</h2>
                <SongList ></SongList>
            </div>
            <div class="suggest">
                <h2 id="suggest_title">Nổi bật của Ngọt</h2>
                <CardList :CardList="this.list"></CardList>
            </div>
        </div>
        <PlayBar ></PlayBar>
    </div>
</template>

<script>

import SideBar from '@/components/SideBar.vue';
import PlayBar from '@/components/PlayBar.vue';
import SongList from '@/components/SongList.vue';
import CardList from '@/components/CardList.vue';
import SongOption from '@/components/mocules/SongOption.vue';
import { EventBus } from '@/EventBus';


    export default {
    name: 'TrackPage',
   
    components: { SideBar, PlayBar,SongList, CardList, SongOption},
    methods:{
        emitTime(time){
            this.nowPlaying.currentTime = time
            EventBus.$emit('playTime',time)
        },
      
        
    },
    mounted(){

        setInterval(()=>{
            this.nowPlaying.lyrics.forEach(lyric=>{

                if(lyric.time <= this.nowPlaying.currentTime){
                    lyric.isPlayed = true;
                }
                else{
                    lyric.isPlayed = false;
                }
            })
        },1000)
       


   
  },
  
 
    data(){
    return {
      nowPlaying:{
        SongName: 'Em Trang Trí',
          Singer: 'Ngọt',
          length: 321,
          src: 'C:\\Users\\ADMIN\\Desktop\\Moody\\src\\assets\\audio\\NT.mp3',
          img: 'gieo.jpg',
          lyrics: [
            {text:'Đưa xuống một li', time:'24',isPlayed:false},
            {text:'Sang trái một tí', time:'26',isPlayed:false},
            {text:'Căn những tròn vuông', time:'28',isPlayed:false},
            {text:'Sao cho vừa ý', time:'31',isPlayed:false},
            {text:'Hai bước về sau', time:'33',isPlayed:false},
            {text:'Nheo mắt vào xem', time:'36',isPlayed:false},
            {text:'Tối thêm màu trắng', time:'38',isPlayed:false},
            {text:'Sáng thêm màu kem', time:'41',isPlayed:false},
            {text:'Đó là em', time:'43', isPlayed:false},
            {text:'Và em lại trang trí căn nhà của chúng ta', time:'45',isPlayed:false},
            {text:'Và em đi trang trí những xanh tươi cành lá', time:'50',isPlayed:false},
            {text:'Và em lại trang trí cây thông chờ Giáng Sinh', time:'54',isPlayed:false},
            {text:'Và em đi trang trí những thói quen của mình', time:'59',isPlayed:false},
            {text:'[Nhạc]', time:'63',isPlayed:false},
            {text:'Quanh những bàn ghế', time:'82',isPlayed:false},
            {text:'Em bắt đầu vẽ', time:'85',isPlayed:false},
            {text:'Những trái tim nhỏ bé', time:'87',isPlayed:false},
            {text:'Khiến chúng đẹp đẽ', time:'90',isPlayed:false},
            {text:'Trang trí thật lâu', time:'92',isPlayed:false},
            {text:'Buông xuống nghỉ ngơi', time:'95',isPlayed:false},
            {text:'Tiếng đơn hàng tới đi cùng với đôi quần áo mới xinh', time:'97',isPlayed:false},
            {text:'Và em lại trang trí căn nhà của chúng ta', time:'103',isPlayed:false},
            {text:'Và em đi trang trí những xanh tươi cành lá', time:'108',isPlayed:false},
            {text:'Và em lại trang trí cây thông chờ Giáng Sinh', time:'113',isPlayed:false},
            {text:'Và em đi trang trí những thói quen của mình', time:'118',isPlayed:false},
            {text:'Và em lại trang trí', time:'123',isPlayed:false},
            {text:'uh uh uh', time:'126',isPlayed:false},
            {text:'Và em lại trang trí', time:'133',isPlayed:false},
            {text:'uh uh uh', time:'135'},
            {text:'Còn ai trang trí căn nhà để sống vui', time:'142',isPlayed:false},
            {text:'Mà không đi trang trí tóc tai hay mặt mũi', time:'148',isPlayed:false},
            {text:'Còn ai trang trí cây thông chờ Giáng Sinh', time:'152',isPlayed:false},
            {text:'Mà không đi trang trí những ước mơ', time:'157',isPlayed:false},
            {text:'Trang trí những ước mơ của mình', time:'161',isPlayed:false},
            {text:'[...]', time:'164',isPlayed:false},
          
          ],
          currentTime:0
      },
      list:[
        {SongName: 'Đánh Đổi', Singer: 'Obito, MCK', img: 'danhdoi.jpg'},
        {SongName: 'Em Trang Trí', Singer: 'Ngọt', img: 'gieo.jpg'},
        {SongName: 'All I Want For Christmas Is You', Singer: 'Mariah Carey', img:'all i want for christmas is you.jpg' },
        {SongName: 'Trước Khi Em Tồn Tại', Singer: 'Thắng', img:'caidautien.jpg'},
        {SongName: 'Tình Yêu Xanh Lá', Singer: 'Thịnh Suy', img:'tinhyeuxanhla.jpg'},
        {SongName: 'Đông Kiếm Em', Singer: 'Vũ.', img: 'dongkiemem.jpg'},
 
      ]


    }
    },
    created(){
        EventBus.$on('time-update',(data)=>{
            this.nowPlaying.currentTime = data
        
     
        })
    },
  
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
@font-face {
    font-family: Nunito;
    src: url('../assets/font/Nunito-VariableFont_wght.ttf');
}

#track{
    font-family: Nunito;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    text-align: left;
  color: #2c3e50;
  height: 100vh;
  background-color: black;
  margin: 0;
  padding: 0;
  display: flex;
  color:white;
}

.header{
    background-image: linear-gradient(to bottom, #ED213A,#93291E);
    height: 350px;
    display: flex;
    align-items: flex-end;
    color: white;
    font-size: 24px;
    padding: 20px 20px;
    z-index: -1;

}
.header img{
    width: 220px;
    height: 220px;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.5);
    
}
.header .info{
    margin: 0 20px;
}
.header h1{
    font-size: 92px;
    margin: 10px 0;
}




.artist{
    width: 30%;
    height: 150px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin:20px;
    padding: 20px;
    border-radius: 10px;
}
.artist_info{
    text-align: left;
    padding-top: 20px;
    margin-left: 20px;
}
.artist_info a,p{
    font-size: 20px;
    text-decoration: none;
    color: white;
    margin: 0;
    padding: 0;
}
.artist:hover{
    background-color: rgba(43, 43, 43, 0.2);    background-color: rgba(43, 43, 43, 0.2);
}
#artist_avt{
    width: 100px;
    height: 100px;
    border-radius: 100px;
}
.content_wrapper{

    display: flex;
}
.lyrics_contain{
    padding: 20px;
    text-align: left;
    width:50%;
   
   
}
.lyrics_contain h2{
    font-size: 28px;
    font-weight: 800;
   
} 
.lyrics{
    background-color: green;
    height: 600px;
    width: 100%;
    border-radius: 10px;
    overflow: auto;
    margin: 20px 0;
    padding: 20px;
}
.lyrics::-webkit-scrollbar {
    height: 80vh;
    width: 10px;
  }
.lyrics::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.5);
  }
.lyrics::-webkit-scrollbar-thumb {
      border-radius: 5px;
      border-right: none;
      border-left: none;
  }

.lyrics p{
    font-size: 24px;
    color: rgba(39, 39, 39, 0.5);
    line-height: 0.5;
    font-weight: 800;
    padding:20px;
    border-radius: 10px;
}
.lyrics p:hover{
    font-size: 32px;
    line-height: 1.2;
    cursor: pointer;
    color: white;
}

.lyrics .target{
    font-size: 28px;
    cursor: pointer;
    line-height: 1.2;
    color: white;
}
#suggest{
    text-align: left;
}
#suggest_title{
    margin: 20px;
}



</style>