<template>
    <div class="navbar">
        <div class="navbar__logo">
            <MoodyLogo />
        </div>
        <div class="navbar__menu">
            <ul class="navbar__menu__lists">
                <li id="trang-chu">
                    Trang chủ
                </li>
                <li id="tinh-nang">
                    Tính năng
                </li>
                <li id="danh-gia">
                    Đánh giá
                </li>
                <li id="gia">
                    Giá
                </li>
                <li id="lien-he">
                    Liên hệ
                </li>
            </ul>
        </div>
        <div class="navbar__configure">
            <DefaultButton><a href="/music-app">Dùng thử</a></DefaultButton>
        </div>
    </div>
</template>

<script>
    import DefaultButton from "./atoms/Button.vue"
    import MoodyLogo from "./atoms/MoodyLogo.vue"
    export default {
        name: 'NavBar',
        components: {
            DefaultButton,
            MoodyLogo
        }
    }

</script>

<style>

ul{
    list-style: none;
}

.navbar__menu__lists {
    display: flex;
    flex-direction: row;

}
.navbar__menu__lists li{
    margin: 0 5px;
    width: 120px;
    gap: 2px;
    transition: 0.5s;
}
.navbar__menu__lists li:hover{
    color:rgb(100, 168, 240);
    cursor: pointer;
}
.navbar__configure{
    display: flex;
    justify-content: space-around;
    gap: 15px;
    
}
.navbar{
        display : flex;
        padding: 15px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        z-index: 999;
        
}

.navbar__configure button{
    height: 50px;
    width: 150px;
    background-color: rgb(71, 71, 238);
    color: white;
    border: none;
    font-weight: 600;
    font-size: 16px;
    transition: 0.5s;
}
.navbar__configure button:hover{
    background-color: white;
    color:black;
    cursor: pointer;
}
.navbar__configure button a:hover{
    color:black;
}

</style>