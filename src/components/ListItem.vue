<template>
    <div class="item">
        <span>{{ id }}</span>
        <div class="info">
            <a href="">{{ name }}</a>
            <a href="">{{ artist }}</a>
        </div>
        <span class="end">{{ length }}</span>
    </div>

</template>

<script>
    export default {
        name: 'ListItem',
        props:['id', 'name','artist','length']

    }
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.item{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    height: 70px;
    padding: 30px;
    border-radius: 5px;
}
.item:hover{
    background-color: rgba(43, 43, 43, 0.2);
}
.info{
    margin: 0 50px;
    padding: 0;

}
.item a{
    text-decoration: none;
    display: block;
    text-align: left;
    color: white;
}
.end{
    margin-left: auto;
}
</style>