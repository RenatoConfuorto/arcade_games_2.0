<template>
  <h1>Tris</h1>
</template>

<script>
export default {
  data(){
    return{
      name: 'Arcade Mania - Tris',
    }
  },
  created(){
    document.title = this.name;
  }

}
</script>

<style lang="scss" scoped>

</style>