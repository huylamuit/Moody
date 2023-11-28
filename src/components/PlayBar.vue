<template>
    <div class="play_bar">
        <div class="song">
            <img class="song_img" :src="require('../assets/img/' + songProps.img)" alt="">
            <div class="song_info">
                <p class="info"><strong>{{ songProps.SongName }}</strong></p>
                <p class = "info">{{ songProps.Singer }}</p>
            </div>
        </div>
        <div class="play_content">
            <div class="play_button">
                <button class="prev">
                    <font-awesome-icon :icon="['fas', 'backward-step']" size="xl" style="color: #ffffff;" />
                </button>
          
                <button v-if="isPlay == true" class="pause" @click="playAndPause()">
                    <font-awesome-icon :icon="['fas', 'pause']" size="xl" style="color: #ffffff;" />
                </button>
                <button v-else class="play" @click="playAndPause">
                    <font-awesome-icon :icon="['fas', 'play']" size="xl" style="color: #ffffff;" />
                </button>
                <button class="next">
                    <font-awesome-icon :icon="['fas', 'forward-step']" size="xl" style="color: #ffffff;" />
                </button>
            </div>
            <div class="play_progress">
                <span class = "play_time">{{ milSecToMin(currentTimeLabel) }}</span>
                <input type="range" v-model = "percent" @change="move"  max = "100" min="0" :step="step" mname="" id="progress_bar" >
                <span class = "play_time">{{milSecToMin(songProps.length*1000)}}</span>
            </div>
        </div>
        <div class="play_option">
            <button><font-awesome-icon :icon="['fas', 'list']" size="lg" style="color: #ffffff;" /></button>
            <button><font-awesome-icon :icon="['fas', 'microphone']" size="lg" style="color: #ffffff;" /></button>
            <button v-if="!isMute" @click="mute"><font-awesome-icon :icon="['fas', 'volume-high']" style="color: #ffffff;" /></button>
            <button v-else @click="mute" ><font-awesome-icon :icon="['fas', 'volume-xmark']" size="lg" style="color: #ffffff;" /></button>
            <input type="range" name="volume" id="volume" v-model="volume" @change="muteCheck">
           
        </div>
    </div>


</template>

<script setup>

import { ref, defineProps} from 'vue'
import  songs  from '../assets/audio/NT.mp3'

let isPlay = ref(false)
let isMute = ref(false)
let percent = ref(0)
let volume = ref(60)
let step = ref((1/songProps.length)*100)
let currentTimeLabel = ref(0)
const SongPlay = new Audio(songs)
const songProps = defineProps({
    SongName: String,
    Singer: String,
    length: Number,
    src: String,
    img: String,
})
console.log(songProps.img )



function move(){
  
    percent.value = Number(percent.value)
    
    SongPlay.currentTime = Number(percentToSec(percent.value))
    currentTimeLabel.value = Number(percentToSec(percent.value)) * 1000



}
function muteCheck(){
    volume.value == 0? isMute.value = true : isMute.value = false
    SongPlay.volume = volume.value / 100

}
function mute(){
    isMute.value = !isMute.value
    if(isMute.value)
        volume.value = 0
    else
        volume.value = 10
    SongPlay.volume = volume.value / 100

}
function playAndPause(){
    

    isPlay.value = !isPlay.value;

    if (isPlay.value){
        SongPlay.play()
    }
    let timer = setInterval(play, 1000)
    function play(){
        if(isPlay.value && percent.value < 100){
            percent.value += (1/songProps.length)*100
            currentTimeLabel.value += 1000
            // console.log('Document ' + a);
            // console.log('Document value: '+ a.value)
        }
        else {
            clearInterval(timer)
            SongPlay.pause()
            
        }
     
    }
}
function milSecToMin(time){
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
function percentToSec(per){
    return per*songProps.length/100
}

</script>


<style>


.play_bar{
    display: flex;
    background-color: black;

    width: 100%;
    height: 90px;
    position:fixed;
    bottom: 0;
    border-radius: 10px 10px 0 0;
    margin: 0;
    color:white;
    padding: 20px;
    align-items: center;
}
.song{

    display: flex;
    align-items: center;
    width: 35%;
 
    justify-items: center;
}
.song_img{
    width: 60px;
    height: 60px;
    display: inline-block;
    border-radius: 8px;
    object-fit: cover;
}
.song_info{
    display: block;
    margin: 5px;
    

}
.info{
    font-size: 14px;
    font-weight: 200;
    margin-left: 10px;
    margin-top: 5px;
}

.play_content{
    align-items: center;
    width:35%;

}
.play_button{
    display: flex;
    justify-content: center;
    justify-items: center;
}
.play_option button{
    width: 50px;
    height: 50px;
    background-color: black;
    border: none;
    margin: 0 15px 0 15px;
}
.play_option button:hover{
    cursor: pointer;
}
.play_time{
    margin: 20px 10px 10px 10px;

}
#progress_bar{
    accent-color:rgb(60, 115, 218);
    background-color: white;
    width:80%;
    height: 5px;
    border-radius: 5px;
}

.play_option{
    width: 35%;


}
</style>