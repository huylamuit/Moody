<template>
    <div id="SearchPage">
        <SideBar></SideBar>
        <div class="content">
            <SearchBar></SearchBar>
            <div class="result_wrapper">
                <div class="result">
                    <h2>Kết quả hàng đầu</h2>
                    <CardList></CardList>
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
        }
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