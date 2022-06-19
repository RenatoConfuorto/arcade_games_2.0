<template>
  <div>
    <div class="container">
      <img src="../assets/img/thumbs.png" title="thumbs" alt="Games thumbs logo" />
      <img src="../assets/img/logo.png" title="Arcade Mania" alt="Arcade Mania logo" />
    </div>
    <ul>
      <li v-for="(item, index) in links" :key="index">
        <router-link :to="item.path">{{ item.text }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Arcade Mania',
      links: [
        {
          path: "/tris",
          text: "Tris",
        },
      ],
    };
  },
  created() {
    document.title = this.name;
  },
};
</script>

<style lang="scss" scoped>

</style>