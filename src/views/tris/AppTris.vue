<template>
  <div>
    <AppGameVersionsList :gameVersions="gameArray"/>
  </div>
</template>

<script>
import AppGameVersionsList from "../../components/AppGameVersionsList.vue";

export default {
  components: {
    AppGameVersionsList,
  },
  data() {
    return {
      gameArray: {
        name: "Arcade Mania - Tris",
        links: [
          {
            path: "/tris/singleplayer",
            text: "SinglePlayer",
            key: 'tris_sp',
            infoReady: false,
          },
          {
            path: "/tris/multiplayer",
            text: "MultiPlayer",
            key: 'tris_mp',
            infoReady: false,
          },
        ],
      },
    };
  },
  created() {
    document.title = this.name;
  },
};
</script>

<style lang="scss" scoped>
</style>