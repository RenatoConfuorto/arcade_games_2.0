<template>
  <div>
    <AppLoader v-if="loading"/>
    <!-- impostare la grandezza al 100% per il loader -->
    <div class="board" v-else>
      <div class="game-area"></div>
      <AppGameData :gameData="dataObject"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AppLoader from '../../components/AppLoader.vue'
import AppGameData from '../../components/AppGameData.vue';

export default {
  name: 'AppTrisSp',
  data(){
    return{
      dataKey : 'tris_sp',
      dataObject: {},
      loading: true,
    }
  },
  components: {
    AppLoader,
    AppGameData,
  },
  created(){

    axios
    .get('http://localhost/arcade_games_2.0/src/assets/php/server.php', { params: {query: this.dataKey} })
    .then(resp => {
      // console.log(resp.data);
      this.dataObject = resp.data;
      this.loading = false;
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
