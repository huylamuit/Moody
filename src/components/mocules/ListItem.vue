<template>
    <div id="item">
        <img :src="require('../../assets/img/' + img)" alt="">
        <div class="info">
            <a href="/music-app/track" class="song_name"><b>{{ name }}</b></a>
            <a href="/music-app/artist" class ="singer_name">{{ artist }}</a>
        </div>
        <span class="end">{{ length }}</span>
    </div>

</template>

<script>

    export default {
        name: 'ListItem',
        props:['img', 'name','artist','length']

    }
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#item{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    height: 70px;
    padding: 30px;
    border-radius: 5px;
}
#item:hover{
    background-color: rgba(43, 43, 43, 0.2);
}
.info{
    margin: 0 50px;
    padding: 0;

}
#item img{
    width:50px;
    height: 50px;
}

#item a{
    text-decoration: none;
    display: block;
    text-align: left;
    color: white;

}
.end{
    margin-left: auto;
    color:white;
    text-decoration: none;
    font-weight: bold;
}
</style>