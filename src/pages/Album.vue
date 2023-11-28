<template>
    <div id="album">
        <SideBar>

        </SideBar>
        <div class="content">
            <div class="header">
                <img :src="require('../assets/img/' + 'danhdoi.jpg')" alt="">
                <div class="info">
                    <p>Đĩa đơn</p>
                    <h1>Đánh Đổi</h1>
                    <p class = "Artist"><Strong>Obito</Strong></p>
                </div>
            </div>
            <div class="SongList">
                <ListItem  :length="123" :id="1" :name="recent[1].SongName" :artist="recent[1].Singer"></ListItem>
            </div>
        </div>
        <PlayBar @play="play" :SongName="nowPlaying.SongName" :Singer="nowPlaying.Singer" :length="nowPlaying.length" :src="nowPlaying.src" :img="nowPlaying.img"/>
    </div>
</template>

<script>

import SideBar from '@/components/SideBar.vue';
import PlayBar from '@/components/PlayBar.vue';
import ListItem from '@/components/ListItem.vue';

    export default {
    name: 'AlbumSong',
    comments: {
        SideBar,
        PlayBar
    },
    components: { SideBar, PlayBar, ListItem },
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
#album{
    font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background-color: black;
  margin: 0;
  padding: 10px 10px 0 10px;
  display: flex;
}

.header{
    background-image: linear-gradient(to top, #141E30,#243B55);
    height: 350px;
    display: flex;
    align-items: flex-end;
    color: white;
    font-size: 24px;
    padding: 20px 20px;

}
.header img{
    width: 220px;
    height: 220px;
    
}
.header .info{
    margin: 0 20px;
}
.header h1{
    font-size: 92px;
    margin: 10px 0;
}
</style>