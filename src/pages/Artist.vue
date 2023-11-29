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
                        <a href="" class="end">xem thêm</a>
                    </div>
                    <CardList></CardList>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import SongList from '@/components/SongList.vue';
import CardList from '@/components/CardList.vue';

    export default {
        name: 'ArtistPage',
        components:{SideBar,SongList, CardList}

    }
</script>

<style>
#artist{
    display: flex;
    color: white;
    background-color: black;
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