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
                <div class="lyrics">
                    <p class = "lyrics">
                        Đưa xuống một li <br>
                        Sang trái một tí <br>
                        Căn những tròn vuông <br>
                        Sao cho vừa ý <br>
                        Hai bước về sau <br>
                        Nheo mắt vào xem <br>
                        Tối thêm màu trắng <br>
                        Sáng thêm màu kem <br>
                        Đó là em <br>
                        Và em lại trang trí căn nhà của chúng ta <br>
                        Và em đi trang trí những xanh tươi cành lá <br>
                        Và em lại trang trí cây thông chờ Giáng Sinh <br>
                        Và em đi trang trí những thói quen của mình <br>
                        <br>
                        Quanh những bàn ghế <br>
                        Em bắt đầu vẽ <br>
                        Những trái tim nhỏ bé <br>
                        Khiến chúng đẹp đẽ <br>
                        Trang trí thật lâu <br>
                        Buông xuống nghỉ ngơi <br>
                        Tiếng đơn hàng tới đi cùng với đôi quần áo mới xinh <br>
                        Và em lại trang trí căn nhà của chúng ta <br>
                        Và em đi trang trí những xanh tươi cành lá <br>
                        Và em lại trang trí cây thông chờ Giáng Sinh <br>
                        Và em đi trang trí những thói quen của mình <br>
                        Và em trang trí uh <br>
                        <br>
                        Và em lại trang trí uh <br>
                        Còn ai trang trí căn nhà để sống vui <br>
                        Mà không đi trang trí tóc tai hay mặt mũi <br>
                        Còn ai trang trí cây thông chờ Giáng Sinh <br>
                        Mà không đi trang trí những ước mơ <br>
                        Trang trí những ước mơ của mình <br>
                    </p>
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
        <PlayBar :SongName="nowPlaying.SongName" :Singer="nowPlaying.Singer" :length="nowPlaying.length" :src="nowPlaying.src" :img="nowPlaying.img"/>
    </div>
</template>

<script>

import SideBar from '@/components/SideBar.vue';
import PlayBar from '@/components/PlayBar.vue';
import SongList from '@/components/SongList.vue';
import CardList from '@/components/CardList.vue';
import SongOption from '@/components/mocules/SongOption.vue';


    export default {
    name: 'TrackPage',
   
    components: { SideBar, PlayBar,SongList, CardList, SongOption},
    data(){
    return {
      nowPlaying:{
        SongName: 'Nàng Thơ',
        Singer: 'Hoàng Dũng',
        length: 321,
        src: 'C:\\Users\\ADMIN\\Desktop\\Moody\\src\\assets\\audio\\NT.mp3',
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
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#track{
    font-family: Avenir, Helvetica, Arial, sans-serif;
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

.lyrics_contain{
    padding: 20px;
    text-align: left;
   
}
.lyrics{
    font-size: 16px;
    color: rgb(100, 100, 100);
    line-height: 20px;
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
#suggest{
    text-align: left;
}
#suggest_title{
    margin: 20px;
}



</style>