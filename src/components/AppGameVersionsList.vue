<template>
  <div class="game-versions-list">
    <ul>
      <li v-for="(item, index) in links" :key="index">
        <router-link :to="item.path">{{ item.text }}</router-link>
        <AppGameDesc :gameInfoKey="item.key" />
      </li>
    </ul>
  </div>
</template>

<script>
import AppGameDesc from "./AppGameDesc.vue";

export default {
  data() {
    return {
      infoReady: false,
      links: this.gameVersions.links,
    };
  },
  components: {
    AppGameDesc,
  },
  created() {
    document.title = this.gameVersions.name;
  },
  props: {
    gameVersions: Object,
    /*
      gameVersion: {
        path: path della pagina
        text: testo del link
        key: per chiamata api
        -
      }
    */
  },
  methods: {},
};
</script>

<style>
</style>