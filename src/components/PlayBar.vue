<template>
    <div class="play_bar">
        <div class="song">
            <img class="song_img" src="https://avatar-ex-swe.nixcdn.com/mv/2020/07/31/d/3/4/5/1596188925706_640.jpg" alt="">
            <div class="song_info">
                <p class="info">{{ song.SongName }}</p>
                <p class = "info">{{ song.Singer }}</p>
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
                <span>{{ milSecToMin(time) }}</span>
                <input type="range" :value="percent" name="" id="progress_bar">
                <span>2:21</span>
            </div>
        </div>
        <div class="play_option">
            <button><font-awesome-icon :icon="['fas', 'volume-high']" style="color: #ffffff;" /></button>
            
            <input type="range" name="volume" id="volume">
        </div>
    </div>


</template>

<script setup>
import { ref } from 'vue'

let isPlay = ref(false)
let percent = ref(0);
let time = ref(0)
let song = ref({
    SongName: "Nàng Thơ",
    Singer: "Hoàng Dũng",
    length:120,
}) 

function playAndPause(){
    isPlay.value = !isPlay.value;
    console.log(percent.value)
    let timer = setInterval(play, 1000)
    function play(){
        if(percent.value == 100 || isPlay.value == false){
            clearInterval(timer)
        }
        else{
            percent.value += (1/song.value.length)*100
            time.value += 1000
            console.log(percent.value)
        }
    }
}
function milSecToMin(time){
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

</script>


<style>

button{
    width: 50px;
    height: 50px;
    background-color: #222222;

    border: none;
    margin: 0 30px 0 0;
}
.play_bar{
    display: flex;
    background-color: #222222;
    width: 100%;
    height: 50px;
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
    width: 10%;
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
.inf{
    font-size: 20px;
    font-weight: 400;
}

.play_content{

    width:100%;

}
#progress_bar{
    color:red;
    width:40%;
    height: 5px;
    background-color: red;
}
.play_option{

}
</style>