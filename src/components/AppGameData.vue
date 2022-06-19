<template>
  <div class="game-data">
    <h1>{{ gameData.title }}</h1>
    <p>{{ gameData.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    gameData: Object,
  }
}
</script>

<style lang="scss" scoped>

</style>