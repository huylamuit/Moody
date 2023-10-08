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
            <DefaultButton></DefaultButton>
            <DefaultButton></DefaultButton>
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

.navabar__menu__lists {
    display: flex;
    flex-direction: row;

}
.navabar__menu__lists li{
    margin: 0 5px;
}
.navbar{
        display : flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

</style>