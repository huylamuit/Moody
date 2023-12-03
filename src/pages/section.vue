<template>
    <div id="artist">
        
        <SideBar></SideBar>
        <div class="content">
            <h2 id="suggest_title">Mới phát hành</h2>
            <CardList :CardList="this.list"></CardList>

   
        </div>
        <PlayBar></PlayBar>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';

import CardList from '@/components/CardList.vue';

import PlayBar from '@/components/PlayBar.vue';


    export default {
        name: 'SectionPage',
        components:{ SideBar,  CardList,  PlayBar },
        data(){
            return{
                list:[
                    {SongName: 'Em Trang Trí', Singer: 'Ngọt', img: 'gieo.jpg' },
                    {SongName: 'Đánh Đổi', Singer: 'Obito, MCK', img: 'danhdoi.jpg'},
                    {SongName: 'All I Want For Christmas Is You', Singer: 'Mariah Carey', img:'all i want for christmas is you.jpg' },
                    {SongName: 'Trước Khi Em Tồn Tại', Singer: 'Thắng', img:'caidautien.jpg'},
                    {SongName: 'Tình Yêu Xanh Lá', Singer: 'Thịnh Suy', img:'tinhyeuxanhla.jpg'},
                    {SongName: 'Đông Kiếm Em', Singer: 'Vũ.', img: 'dongkiemem.jpg'},      
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