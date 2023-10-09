<template>
    <button> 
        <slot />
    </button>
</template>

<script>
export default {
  name: 'DefaultButton',
  methods: {
    showAlert() {
      alert("Something!");
    }
}

}


</script>

<style>
    button{
        width: 100px;
        height: 35px;
        border-radius: 10px;    
    }

</style>