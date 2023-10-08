<template>
    <div class ="card">
        <div class="card_header" @click="showAlert">
            <div class="card_image">
                <a href="https://www.facebook.com/">
                    <div class="play_icon_cover">
                    <svg class = "play_icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" fill="white"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                </div>
                </a>
               
            </div>
            
           
        </div>
        <div class="card_info">
            <p id="song_name">Space Melody</p>
            <p id="singer_name">VIZE & Alan Walker & Leony</p>
        </div>
       
          
    </div>
</template>

<script>
export default {
  name: 'SongCard',
  methods: {
    showAlert() {
      alert("Something!");
    }
}

}


</script>

<style>
.card{
    height: 250px;
    width:230px;

    border-radius: 16px;
    padding: 8px;
    box-sizing: content-box;
    
}
.card_header{
    background-color: blue;
    border-radius: 12px;
    height: 100%;
    width:100%;
    margin: 0 auto;
    overflow: hidden;
}

.card_image{    
    position: relative;
    background-color: blue;
    border-radius: 5px;
    height: 100%;
    width:100%;
    background: url(https://source.unsplash.com/y3aP9oo9Pjc/500x500);
    background-size: cover;
    background-repeat: no-repeat;
    transition: all ease-in-out .4s;
    z-index: 0;
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
    background-color:#222227;
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

.card:hover .card_image{
  transform: scale(1.2);
  filter: brightness(90%);
  cursor: pointer;



}
.card:hover .play_icon_cover{
    display: block;

}
p{
    text-align: left;
    margin:5px 0 ;
    padding:0;
    font-size: 12px;
}
#song_name{
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
}
#song_name:hover{
    color:rgb(60, 115, 218)
   
}

</style>