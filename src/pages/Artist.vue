<template>
    <div id="artist">
        
        <SideBar></SideBar>
        <div class="content">
       
            <div class="header">
                <img :src="require('../assets/img/' + 'ngot.jpg')" alt="">
                <div class="artist_info">
                    <h1>Ngọt</h1>
                    <p>535,092 lượt nghe mỗi tháng</p>
                </div>
                
            </div>
            
            <div class="list">
                <h2>Phổ Biến</h2>
                <SongList></SongList>
            </div>
            <div class="suggest">
                <div>
                    <div class="list_title">
                        <h2>Đề xuất</h2>
                        <a href="/music-app/section" class="end">xem thêm</a>
                    </div>
                    <CardList :CardList="this.list"></CardList>
                </div>
            </div>
        </div>
        <PlayBar></PlayBar>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import SongList from '@/components/SongList.vue';
import CardList from '@/components/CardList.vue';

import PlayBar from '@/components/PlayBar.vue';


    export default {
        name: 'ArtistPage',
        components:{ SideBar, SongList, CardList,  PlayBar },
        data(){
            return{
                list:[
                    {SongName: 'Đánh Đổi', Singer: 'Obito, MCK', img: 'danhdoi.jpg'},
                    {SongName: 'Em Trang Trí', Singer: 'Ngọt', img: 'gieo.jpg' },
                    {SongName: 'All I Want For Christmas Is You', Singer: 'Mariah Carey', img:'all i want for christmas is you.jpg' },
                    {SongName: 'Trước Khi Em Tồn Tại', Singer: 'Thắng', img:'caidautien.jpg'},
                    {SongName: 'Tình Yêu Xanh Lá', Singer: 'Thịnh Suy', img:'tinhyeuxanhla.jpg'},
                    {SongName: 'Đông Kiếm Em', Singer: 'Vũ.', img: 'dongkiemem.jpg'},      
                ]
            }
        }

    }
</script>

<style>
@font-face {
    font-family: Nunito;
    src: url('../assets/font/Nunito-VariableFont_wght.ttf');
}
#artist{
    font-family: Nunito;
    display: flex;
    color: white;
    background-color: black;
    height: 100vh;
}
.suggest{
    margin:20px;
    overflow: hidden;
}
.suggest .list_title{
    display: flex;
    align-items: flex-end;
    padding: 20px;
    color: white;
}

</style>