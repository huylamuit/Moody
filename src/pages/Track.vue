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
           <div class="lyrics_contain">
                <h2>Lời bài hát</h2>
                <div class="lyrics" >
                    <p v-for="(lyric,index) in nowPlaying.lyrics  " :key="index" id="" @click="emitTime(lyric.time)" :class="{ 'target': lyric.time <= currentTime }" >{{ lyric.text }}</p>
                </div>
           </div>
           <div class="artist">
                <img :src="require('../assets/img/' + 'ngot.jpg')" alt="" id="artist_avt">
                <div class="artist_info">
                    <p>Ban nhạc</p>
                    <a href="/music-app/artist">Ngọt</a>
                </div>
            </div>
            <div class="suggest">
                <h2 id="suggest_title">Đề Xuất</h2>
                <SongList ></SongList>
            </div>
            <div class="suggest">
                <h2 id="suggest_title">Nổi bật của Ngọt</h2>
                <CardList></CardList>
            </div>
        </div>
        <PlayBar></PlayBar>
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
            EventBus.$emit('playTime',time)
        }
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
            {text:'Đưa xuống một li', time:'24'},
            {text:'Sang trái một tí', time:'27'},
            {text:'Căn những tròn vuông', time:'29'},
            {text:'Sao cho vừa ý', time:'32'},
            {text:'Hai bước về sau', time:'34'},
            {text:'Nheo mắt vào xem', time:'37'},
            {text:'Tối thêm màu trắng', time:'39'},
            {text:'Sáng thêm màu kem', time:'42'},
            {text:'Đó là em', time:'44'},
            {text:'Và em lại trang trí căn nhà của chúng ta', time:'46'},
            {text:'Và em đi trang trí những xanh tươi cành lá', time:'51'},
            {text:'Và em lại trang trí cây thông chờ Giáng Sinh', time:'55'},
            {text:'Và em đi trang trí những thói quen của mình', time:'60'},
            {text:'[Nhạc]', time:'64'},
            {text:'Quanh những bàn ghế', time:'83'},
            {text:'Em bắt đầu vẽ', time:'86'},
            {text:'Những trái tim nhỏ bé', time:'88'},
            {text:'Khiến chúng đẹp đẽ', time:'91'},
            {text:'Trang trí thật lâu', time:'93'},
            {text:'Buông xuống nghỉ ngơi', time:'96'},
            {text:'Tiếng đơn hàng tới đi cùng với đôi quần áo mới xinh', time:'98'},
            {text:'Và em lại trang trí căn nhà của chúng ta', time:'104'},
            {text:'Và em đi trang trí những xanh tươi cành lá', time:'109'},
            {text:'Và em lại trang trí cây thông chờ Giáng Sinh', time:'114'},
            {text:'Và em đi trang trí những thói quen của mình', time:'119'},
            {text:'Và em lại trang trí', time:'124'},
            {text:'uh uh uh', time:'126'},
            {text:'Và em lại trang trí', time:'134'},
            {text:'uh uh uh', time:'136'},
            {text:'Còn ai trang trí căn nhà để sống vui', time:'143'},
            {text:'Mà không đi trang trí tóc tai hay mặt mũi', time:'149'},
            {text:'Còn ai trang trí cây thông chờ Giáng Sinh', time:'153'},
            {text:'Mà không đi trang trí những ước mơ', time:'158'},
            {text:'Trang trí những ước mơ của mình', time:'162'},
            {text:'[...]', time:'128'},
          ],
          currentTime:0
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
    created(){
        EventBus.$on('time-update',(data)=>{
            this.nowPlaying.currentTime = data
            console.log(this.nowPlaying.currentTime)
     
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

.option{
   
}


.artist{
    height: 150px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    padding: 20px;
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
.lyrics_contain{
    padding: 20px;
    text-align: left;
   
}
.lyrics{
    background-color: orange;
    height: 600px;
    border-radius: 10px;
    overflow: auto;
    margin: 20px 0;
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
    cursor: pointer;
    color: white;
}

.lyrics .target{
    font-size: 32px;
    cursor: pointer;
    color: white;
}
#suggest{
    text-align: left;
}
#suggest_title{
    margin: 20px;
}



</style>