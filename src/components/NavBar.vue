<template>
    <div class="navbar">
        <div class="navbar__logo">
            <MoodyLogo />
        </div>
        <div class="navbar__menu">
            <ul class="navabar__menu__lists">
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Performer
                </li>
                <li>
                    Event Scheduler
                </li>
                <li>
                    Blog
                </li>
            </ul>
        </div>
        <div class="navbar__configure">
            <DefaultButton>Sign Up</DefaultButton>
            <DefaultButton>Log In</DefaultButton>
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
.navbar__menu{

}
.navabar__menu__lists {
    display: flex;
    flex-direction: row;

}
.navabar__menu__lists li{
    margin: 0 5px;
    width: 120px;
    gap: 2px;
}
.navbar__configure{
    display: flex;
    justify-content: space-around;
    gap: 15px;
    
}
.navbar{
        display : flex;
        padding: 15px;
        margin: 5px 10px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        z-index: 999;
        background-color: aqua;
        
    }

</style>