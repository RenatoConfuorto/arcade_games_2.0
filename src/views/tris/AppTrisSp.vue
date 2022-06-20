<template>
  <div>
    <AppLoader v-if="loading"/>
    <!-- impostare la grandezza al 100% per il loader -->
    <div class="board" v-else>
      <div class="game-area">
        <div id="grid">
          <div class="cell" v-for="n in 9" :key="n"></div>
        </div>
      </div>
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
$cell-size: 120px;
$gutter: 60px;

#grid{
  width: calc(($cell-size * 3 ) + $gutter);
  height: calc(($cell-size * 3 ) + $gutter);

  // border: 1px solid white;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-between;

  .cell{
    width: $cell-size;
    height: $cell-size;

    border: 4px solid white;
    cursor: pointer;
    font-size: 60px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
