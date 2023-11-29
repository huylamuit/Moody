<template>
    <div id="SearchBar">
        <input type="text" name="" id="" placeholder="Bạn muốn nghe gì?">
    </div>
</template>

<script>

import SideBar from '../SideBar.vue'

    export default {
        name: 'SearchBar',
        comments: {
            SideBar,
        },
        data(){
            return{
           
            }
        },
    
    }
</script>

<style>
#SearchBar{
    width: 30%;
    height: 40px;
    background-color: blue;
    margin: 20px;

    border-radius: 100px;
}

#SearchBar input{
    width: 100%;
    height: 40px;
    border-radius: 100px;
    font-size: 16px;
    background-color: rgb(36, 36, 36);
    border: solid white 1px;
    padding: 20px;
    font-weight:500;
    color: white;
}
</style>