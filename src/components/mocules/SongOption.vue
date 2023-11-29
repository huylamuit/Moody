<template>
    <div id="SongOption">
        <button id="play_btn">
            <font-awesome-icon :icon="['fas', 'play']" size="xl" style="color: #ffffff;" />
          
        </button>
        <button v-if="isFav == false" id ="fav_btn" @click ="toggleFav">
            <font-awesome-icon :icon="['far', 'heart']" size="xl" style="color: #ffffff;" />
        </button>
        <button v-else id ="fav_btn"  @click ="toggleFav">
            <font-awesome-icon :icon="['fas', 'heart']" size="xl" style="color: #ee6868;"  />    
        </button>
    </div>
</template>

<script>
    export default {
        name: 'SongOption',
        data(){
            return({
                isFav: false,

            })
        },
        methods:{
            toggleFav(){
                console.log(this.isFav)
                this.isFav = !this.isFav
               
            }
        }
    }
</script>

<style>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
#SongOption{
    height: 100px;
    display:flex;
    padding: 20px;
}
#SongOption button:hover{
    transform: scale(1.2);
    transition: all ease-in-out .2s;
    cursor: pointer;
}

#play_btn{
    border-radius: 100px;
    width: 50px;
    height: 50px;
    background-color:#6DADFA ;
    border:none;
    margin: 0 10px;
}
#fav_btn{
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border:none;
    background-color: black;
    margin: 0 10px;
}
</style>