<template>         
    <div id="slide">
     
        <div class="slide_content">
            <div class="slide_option">
                <font-awesome-icon :icon="['fas', 'chevron-left']" size="xl" style="color: #ffffff;" @click="toLeft" class="option_button left"/>
                <font-awesome-icon :icon="['fas', 'chevron-right']" size="xl" style="color: #ffffff;" @click="toRight" class="option_button right" />
            </div>
            <div v-if="this.SlideIndex==0" clas="slide_content" id="slide1">
                <a href="/music-app/section">
                    <img src="https://i.pinimg.com/originals/ff/16/01/ff160152754a2732ccb91c8aa63b34cc.jpg" alt="" class="slide_img">
                    <div class="slide_description">
                        <h1>Hòa mình vào <br> không khí Giáng Sinh </h1>
                    </div>
                </a>
               
            </div>
            <div v-else-if="this.SlideIndex == 1" clas="slide_content" id="slide1">
                <a href="/music-app/section">
                    <img src="../../assets/img/dep.jpg" alt="" class="slide_img">
                    <div class="slide_description">
                        <h1>Mono trở lại<br> cùng với EP "Đẹp"</h1>
                    </div>
                </a>
            </div>
           
            
        </div>
    </div>


</template>

<script>
    export default {
        name: 'ImgSlider',
        data(){
            return{
                SlideIndex:0
            }
        },
        methods:{
            toLeft(){
                if(this.SlideIndex == 0){
                    this.SlideIndex = 1
                }
                else{
                    this.SlideIndex--
                }
             
               
                console.log(this.SlideIndex)
            },
            toRight(){
                if(this.SlideIndex == 1){
                    this.SlideIndex = 0
               
                }else{
                    this.SlideIndex++
                }
              
                console.log(this.SlideIndex)
            }
        },
       mounted(){
            setInterval(()=>{
                if(this.SlideIndex == 1){
                    this.SlideIndex = 0
               
                }else{
                    this.SlideIndex++
                }
                console.log("heh")
              
            },3000)
       }
    }
</script>

<style>
  #slide{
    position: relative;
    width: 97%;
    height: 500px;
    color: white;
    margin:20px;
    border-radius: 10px ;
    overflow: hidden;


  
  }
  .slide_option{
    background-color: red;
  }
.slide_option svg{
    width: 50px;
    height: 50px;
    margin:20px;
    border-radius: 10px;


}
.option_button{
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);

}
.left{
    left: 20px;
}
.right{
    right:20px;
}



.slide_img{
    width: 100%;
    height: 100%;
    

}
.slide_content:hover{
    cursor: pointer;
}
.slide_description{
    color: white;
    position: absolute;

    bottom: 0px;
    text-align: left;
    padding: 20px;

}

</style>