<template>
    <div class="home">
    <section class="first-section">
        <div class="left__seciton">
            <div class="left__section__info">
                <h1>Experience The</h1>
                <h1>Best Quality Music</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia, impedit, dolore vero ullam quaerat quisquam laborum quas ipsa autem velit sed minus dolores quo officia? Tenetur voluptate fugit similique.</p>
            </div>
            <div class="right__section__info">
                <p>Download now on IOS and Andoid</p>
                <div>
                    <img />
                    <img />
                </div>
            </div>
        </div>
        <div class="right__section">
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
                <p>Download now on IOS and Andoid</p>
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
.home{
    position: relative;
}
    .first-section{
        position: absolute;
        width: 100%;
        height: 600px;
        background-color: rgb(40, 225, 19);
        top: 90px;
        color: red;
        border-radius: 0 0 60px 60px;
        z-index: -1;

    }
    .second-section{
        position: absolute;
        width: 100%;
        height: 500px;
        top:500px;
        background-color: rgb(154, 91, 71);
        color: red;
        border-radius: 0 0 60px 60px;
    }

</style>