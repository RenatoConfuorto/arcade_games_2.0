<template>
  <div>
    <span class="info-button" @click="showInfo">?</span>
    <div class="game-info" @click="removeActive">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      serverAddress: this.$parent.$parent.$parent.serverAddress,
      title: "",
      text: "",
    };
  },
  created() {
    axios
      .get(`${this.serverAddress}/arcade_games_2.0/src/assets/php/server.php`, {
        params: { query: this.gameInfoKey },
      })
      .then((resp) => {
        // console.log(resp.data);
        this.title = resp.data.title;
        this.text = resp.data.text;
      });
  },
  methods: {
    removeActive(event) {
      event.target.classList.remove("active");
      event.target.parentElement.classList.remove("active");
    },
    showInfo(event) {
      event.target.nextElementSibling.classList.add("active");
    },
  },
  props: {
    gameInfoKey: String,
  },
};
</script>

<style lang="scss" scoped>
</style>