<template>
    <div id="play_bar">
        <div class="song">
            <img class="song_img" :src="require('../assets/img/' + this.info.img)" alt="">
            <div class="song_info">
                <p class="info"><strong>{{ this.info.SongName }}</strong></p>
                <p class = "info">{{ this.info.Artist }}</p>
            </div>
        </div>
        <div class="play_content">
            <audio :src="require('../assets/audio/'+ 'ETT.mp3')" id="audio" >asd</audio>
            <div class="play_button">
                <button id="prev">
                    <font-awesome-icon :icon="['fas', 'backward-step']" size="xl" style="color: #ffffff;" />
                </button>
          
                <button v-if="isPlay == true" class="pause"  @click="togglePlay" >
                    <font-awesome-icon :icon="['fas', 'pause']" size="xl" style="color: #ffffff;" />
                </button>
                <button v-else class="play"  @click="togglePlay" >
                    <font-awesome-icon :icon="['fas', 'play']" size="xl" style="color: #ffffff;" />
                </button>
                <button id="next">
                    <font-awesome-icon :icon="['fas', 'forward-step']" size="xl" style="color: #ffffff;" />
                </button>
            </div>
            <div class="play_progress">
                <span class = "play_time">{{ formatTime(currentTime) }}</span>
                <input type="range"  max = "100" min="0" :value="calculateProgress()" @input="seekTo" @change="emitCurrentTime" mname="" id="progress_bar" >
                <span class = "play_time">{{ formatTime(duration) }}</span>
            </div>
        </div>
        <div class="play_option">
            <button v-if="!isMute" @click="toggleMute"><font-awesome-icon :icon="['fas', 'volume-high']" style="color: #ffffff;" /></button>
            <button v-else @click="toggleMute"><font-awesome-icon :icon="['fas', 'volume-xmark']" size="lg" style="color: #ffffff;" /></button>
            <input type="range" name="volume" id="volume" v-model="volume" @input="updateVolume">
           
        </div>
    </div>


</template>

<script>

import { EventBus } from '@/EventBus';

    export default {
        name: 'PlayBar',
        components:{},
        data(){
            return{
                isPlay: false,
                isMute: false,
                volume:60,
                currentTime:0,
                duration:208,
                info:{SongName:'Em Trang Trí', Artist:'Ngọt', img:'gieo.jpg'}
            }
        },
        methods: {
            toggleMute(){
                const audio = document.getElementById('audio');
                if(this.isMute==true){   
                    audio.volume = 0.3;
                    this.volume = 30;
                }
                else{
                    audio.volume = 0;
                    this.volume = 0;
                }
                this.isMute = !this.isMute
            },
            updateVolume(){
                const audio = document.getElementById('audio');
                audio.volume = this.volume/100;
        
            },
            togglePlay() {
                const audio = document.getElementById('audio');
                if (this.isPlay) {
                    audio.pause();
                } else {
                    audio.play();
                }
                this.isPlay = !this.isPlay;
                EventBus.$emit('playBarEmitPlay')
            },
            calculateProgress() {
                return (this.currentTime / this.duration) * 100;
            },
            seekTo(event) {
                const seekTime = (event.target.value / 100) * this.duration;
                const audio = document.getElementById('audio');
                audio.currentTime = seekTime;
            },
            formatTime(seconds) {
                const minutes = Math.floor(seconds / 60);
                const remainingSeconds = Math.floor(seconds % 60);
                return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
            },
           
            emitCurrentTime(){
                
                setInterval(() => {
                    let minutes = Math.floor(this.currentTime / 60);
                    let remainingSeconds = Math.floor(this.currentTime % 60);
                    let data = minutes*60 + remainingSeconds 

                    EventBus.$emit('time-update',data);
                }, 1100);
            }

        },
        mounted() {
            const audio = document.getElementById('audio');

            audio.addEventListener('timeupdate', () => {
                this.currentTime = audio.currentTime;
                this.duration = audio.duration;
            });
            this.emitCurrentTime()
        },
        created() {
            // Listening the event hello
            EventBus.$on('playTime', (data)=>{
                this.currentTime=data
                const audio = document.getElementById('audio');
                if(this.isPlay==false){
                    this.isPlay = !this.isPlay
                    audio.play()
                }
                    
                audio.currentTime = data;
            });
            EventBus.$on('getEmitPlay',this.togglePlay)
            EventBus.$on('SongCardPlay',(data)=>{
                console.log('wiwiw')
                this.info.img = data[2]
                this.info.SongName = data[0]
                this.info.Artist = data[1]
            })
        },
    }


</script>


<style>


#play_bar{
    display: flex;

    width: 100%;
    height: 90px;
    position:fixed;
    bottom: 0;
    border-radius: 10px 10px 0 0;
    margin: 0;
    color:white;
    padding: 20px;
    align-items: center;
    background-color: black;
    
}
.song{

    display: flex;
    align-items: center;
    width: 35%;
    text-align: left;
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
    margin: -30px;
    text-align: left;
}
.info{
    font-size: 16px;
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
.play_button button{
    background-color: black;
    border:none;

}

.play_option button{
    width: 50px;
    height: 50px;
    background-color: black;
    border: none;
    margin: 0 15px 0 15px;
}
.play_option,.play_button button:hover{
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
    width: 30%;


}
</style>