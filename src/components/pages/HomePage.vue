<template>
    <div class="home">
    <section class="first-section">
        <div class="left__seciton">
            <div class="left__section__info-top">
                <h1 style="color:rgb(179, 173, 166)">Experience The</h1>
                <h1>Best Quality Music</h1>
                <p style="color:beige">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia, impedit, dolore vero ullam quaerat quisquam laborum quas ipsa autem velit sed minus dolores quo officia? Tenetur voluptate fugit similique.</p>
            </div>
            <div class="left__section__info-bottom">
                <p style="color: white !important;text-align:start;padding:2rem;">Download now on IOS and Andoid</p>
                <div class="download-container">
                    <img class="download gg" src="../../assets/google-play.png" />
                    <img class="download app-store" src="../../assets/app-store.png" />
                </div>  
            </div>
        </div>
        <div class="right__section">
            <div>
                
                <img class="iphone" src="../../assets/iphone.png"/>
            </div>
        </div>
    </section>
    <section class="second-section">
        <div class="left__seciton">
            <div>
                <h1>Experience The</h1>
                <h1>Best Quality Music</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia, impedit, dolore vero ullam quaerat quisquam laborum quas ipsa autem velit sed minus dolores quo officia? Tenetur voluptate fugit similique.</p>
            </div>
            <div>
                <div>
                    <img />
                    <img />
                </div>
            </div>
        </div>
        <div class="right__section">
        </div>
</section>
    </div>
    
</template>

<script>
    export default {
        nam: 'HomePage',
        
    }
</script>

<style>

h1{
    color:white;
    font-size: 3.5rem;
}
.home{
    position: relative;
}
    .first-section{
        display: flex;
        position: absolute;
        width: 100%;
        height: 700px;
        background-color: rgb(24, 26, 74);
        top: 80px;
        padding: 4rem;
        border-radius: 0 0 80px 80px;
        justify-content: space-around;
        color: white;
        z-index: 9;
    }

    .first-section > .right__section {
        position: relative;
        width:1200px;
    }

    .first-section  .left__section__info-top {
        display: flex;
        text-align: start;
        width: 100%;
        height: 400px;
        padding: 2rem;
        flex-direction: column;
        justify-content: center;
        margin: auto 0;
    }


    .second-section{
        position: absolute;
        width: 100%;
        height: 700px;
        top:600px;
        background-color: #313e78;
        color: red;
        border-radius: 0 0 60px 60px;
    }
    .iphone{
        position: absolute;
        right: 0;
        top:-50px;
        right: 50px;
        width: 500px;
    }

    .download{
        width:110px;
        height: 40px;
    }
    .gg{
        scale: 1.43;
    }
    .app-store{
        width:130px;
        margin-left: 10px;
    }

    .download-container{
        width: 260px;
        display: flex;
        justify-content: space-between;
        margin-left: 2.5rem;
    }


</style>