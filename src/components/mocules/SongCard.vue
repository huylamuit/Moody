<template>
    <div id ="card">
        <div class="card_header" >
            <div class="card_image">
                <img :src="require('../../assets/img/' + img)" alt="">
                    <div @click="play()" class="play_icon_cover">
                        <svg  class = "play_icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" fill="white"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                </div>         
            </div>        
        </div>
        <div class="card_info">
            <a href="/music-app/track" class="song_name">{{ SongName }}</a>
            <a href="" class="singer_name">{{ Singer }}</a>
        </div> 
    </div>
</template>

<script>
import { EventBus } from '@/EventBus';
export default {
  name: 'SongCard',
  props:['SongName','Singer','img'],
  methods: {
    play(){
        EventBus.$emit('SongCardPlay',[this.SongName, this.Singer, this.img])
    }
}

}



</script>

<style>
#card{
    height: 320px;
    width: 230px;
    background-color: #161616;
    border-radius: 16px;
    padding: 8px;
    box-sizing: border-box;
    color:white;
    margin:10px;
    text-align: left;

    
}
.card_header{

    border-radius: 12px;
    height: 75%;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: 10px;
}

.card_image{    
    position: relative;

    border-radius: 5px;
    height: 100%;
    width:100%;

    transition: all ease-in-out .4s;
    z-index: 0;
}
.card_image img{
    width: 100%;
    height: 100%;
}
.play_icon_cover{
    position: absolute;
    width: 50px;
    height: 50px;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 99;
    display: none;
    background-color:#222222;
    border-radius: 5px;
    opacity: 0.8;
}
.play_icon{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);   
    color: white;
    z-index: 99999;
    

}

#card:hover .card_image{
  transform: scale(1.2);
  filter: brightness(90%);
  cursor: pointer;



}
#card:hover .play_icon_cover{
    display: block;

}
#card:hover{
    background-color: #242424;
}
p{
    text-align: left;
    margin:5px 0 ;
    padding:0;
    font-size: 12px;
}
.song_name{
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    text-decoration: none;
    color: white;
}
.singer_name{
    font-size: 14px;
    display: block;
    text-decoration: none;
    color: white;
}
.song_name:hover{
    color:#6DADFA;
   
}

</style>