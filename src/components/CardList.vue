<template>
    <div id="CardList">
        <div  v-for="(song,index) in list" :key="index">
              <SongCard :SongName="song.SongName" :Singer="song.Singer" :img="song.img"/>
        </div>
    </div>

</template>

<script>

import SongCard from './mocules/SongCard.vue';

    export default{
        name: 'CardList',
        components:{SongCard},
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
#CardList{

    display: flex;
    flex-wrap: wrap;
}
</style>