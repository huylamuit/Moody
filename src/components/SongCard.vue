<template>
    <div class ="card">
        <div class="card_header">
            <div class="card_image">
                <div class="play_icon_cover">
                    <font-awesome-icon class="play_icon" icon="fa-solid fa-user-secret" />
                </div>
            </div>
            
           
        </div>
        <div class="card_info">
            <p>hehe</p>
            <p>hehe</p>
        </div>
       
          
    </div>
</template>

<script>
export default {
  name: 'SongCard',

}


</script>

<style>
.card{
    height: 150px;
    width:130px;

    border-radius: 16px;
    padding: 8px;
    box-sizing: content-box;
    
}
.card_header{
    background-color: blue;
    border-radius: 12px;
    height: 80%;
    width:80%;
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
    width: 30px;
    height: 30px;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 99;
    color: white;
    display: none;
    background-color: gray;
    border-radius: 5px;

}
.play_icon{
    
}
.card:hover .card_image{
  transform: scale(1.2);

}
.card:hover .play_icon_cover{
    display: block;
}


</style>