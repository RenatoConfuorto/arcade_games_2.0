<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    showAlert(message) {
      const gameArea = this.$el.querySelector(".game-area");

      const alertMessage = `<div class="game-alert">
                <div class="game-alert-message">${message}
                </div>
            </div>`;
      gameArea.innerHTML += alertMessage;
    },
  },
};
</script>

<style lang="scss">
@import "assets/style/style.scss";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
</style>
