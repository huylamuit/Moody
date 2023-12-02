<template>
    <div id="CardList">
        <div  v-for="(song,index) in CardList" :key="index">
              <SongCard :SongName="song.SongName" :Singer="song.Singer" :img="song.img"/>
        </div>
    </div>

</template>

<script>

import SongCard from './mocules/SongCard.vue';

    export default{
        name: 'CardList',
        components:{SongCard},
        props:['CardList'],
        data(){
            return{
              
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