<template>
    <div id="SearchBar">
        <input @input="emitSearch" v-model="keyword" type="text" name="" id="" placeholder="Bạn muốn nghe gì?">
    </div>
</template>

<script>

import { EventBus } from '@/EventBus';
    export default {
        name: 'SearchBar',
        components: {
      
        },
        data(){
            return{
                keyword:''
            }
        },
        methods:{
            emitSearch(){
                EventBus.$emit('search',this.keyword)
            }
        }
    
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