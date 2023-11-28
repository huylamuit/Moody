<template>
    <div id="SongList">

        <div  v-for="(song,index) in list" :key="index">
              <ListItem :name="song.SongName" :artist="song.Singer" :img="song.img"  :length="song.length" />
        </div>
    </div>
</template>

<script >
import ListItem from './mocules/ListItem.vue';
    export default {
    name: 'SongList',
    components: { ListItem },

    data(){
        return{
            list:[
                {SongName: 'Đánh Đổi', Singer: 'Obito, MCK', img: 'danhdoi.jpg', length: '2:23'},
                {SongName: 'Em Trang Trí', Singer: 'Ngọt', img: 'gieo.jpg' , length: '2:23'},
                {SongName: 'All I Want For Christmas Is You', Singer: 'Mariah Carey', img:'all i want for christmas is you.jpg', length: '2:23' },
                {SongName: 'Trước Khi Em Tồn Tại', Singer: 'Thắng', img:'caidautien.jpg', length: '2:23'},
                {SongName: 'Tình Yêu Xanh Lá', Singer: 'Thịnh Suy', img:'tinhyeuxanhla.jpg', length: '2:23'},
                {SongName: 'Đông Kiếm Em', Singer: 'Vũ.', img: 'dongkiemem.jpg', length: '2:23'},
            ]
        }
    }
}
</script>
<style>
#SongList{
    text-align: left;


}
#SongList h2{
    margin: 20px;
}
</style>