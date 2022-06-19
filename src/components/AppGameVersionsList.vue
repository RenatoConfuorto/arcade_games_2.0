<template>
  <div class="game-versions-list">
    <ul>
      <li v-for="(item, index) in links" :key="index">
        <router-link to="item.path">{{ item.text }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      links: this.gameVersions.links
    }
  },
  created(){
    document.title = this.gameVersions.name
  },
  props: {
    gameVersions: Object,
  }
}
</script>

<style>

</style>