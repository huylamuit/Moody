<template>
    <div id="SearchPage">
        <SideBar></SideBar>
        <div class="content">
            <SearchBar></SearchBar>
            <div class="result_wrapper">
                <div class="result">
                    <h2>Kết quả hàng đầu</h2>
                    <CardList :CardList="searchedList"></CardList>
                </div>

            </div>
        </div>
        <PlayBar :SongName="nowPlaying.SongName" :Singer="nowPlaying.Singer" :length="nowPlaying.length" :src="nowPlaying.src" :img="nowPlaying.img"></PlayBar>
    </div>
    
</template>

<script>

import SearchBar from '@/components/mocules/SearchBar.vue'
import SideBar from '@/components/SideBar.vue';
import CardList from '@/components/CardList.vue';
import PlayBar from '../components/PlayBar.vue';
import { EventBus } from '@/EventBus';


    export default {
    name: 'SearchPage',
    comments: {
        SearchBar,
        SideBar,
        CardList,
        PlayBar
    },
    components: { SideBar, SearchBar, CardList, PlayBar },
    data(){
        return{
            nowPlaying:{
                SongName: 'Em Trang Trí',
                Singer: 'Ngọt',
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
            ],
            searchedList:[]
        }
    },
    mounted(){
        EventBus.$on('search',(data)=>{
        
            this.searchedList = this.recent.filter((song)=>{
                return song.SongName.toLowerCase().includes(data.toLowerCase()) || song.Singer.toLowerCase().includes(data.toLowerCase())
            })
            this.searchedList.forEach(element => {
                console.log(element.SongName)
            });
          
        })
    }
}
</script>

<style>
@font-face {
    font-family: Nunito;
    src: url('../assets/font/Nunito-VariableFont_wght.ttf');
}
#SearchPage{
    font-family: Nunito;
    display: flex;
    color: white;
    background-color: black;
    height: 100vh;
}

#SearchPage .result_wrapper{
    margin: 20px;
}
</style>