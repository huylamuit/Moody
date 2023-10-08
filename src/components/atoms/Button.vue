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


</style>