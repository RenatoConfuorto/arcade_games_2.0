<template>
  <div>
    <AppLoader v-if="loading" />
    <div class="board" v-else>
      <div class="game-area">
        <div id="grid">
          <div class="cell" v-for="n in 9" :key="n" @click="click"></div>
        </div>
      </div>
      <AppGameData :gameData="dataObject" />
    </div>
  </div>
</template>

<script>
import AppLoader from "../../components/AppLoader.vue";
import AppGameData from "../../components/AppGameData.vue";
import axios from "axios";

export default {
  components: {
    AppLoader,
    AppGameData,
  },
  data() {
    return {
      dataKey: "tris_mp",
      dataObject: {},
      loading: true,
      sign: "",
      turn: 0,
      cellSigns: [],
      cells: [],
      winningCombinations: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
  },
  created() {
    axios
      .get(`${this.$parent.serverAddress}/arcade_games_2.0/src/assets/php/server.php`, {
        params: { query: this.dataKey },
      })
      .then((resp) => {
        // console.log(resp.data);
        this.dataObject = resp.data;
        this.loading = false;
      });
  },
  updated() {
    const nodeListCells = this.$el.querySelectorAll(".cell");
    this.cells = Array.from(nodeListCells);
  },
  methods: {
    click(event) {
      const cell = event.target;
      const index = this.cells.indexOf(cell);

      if (this.cellSigns[index]) return;
      this.turn++;

      if (this.turn % 2 === 1) {
        this.sign = "X";
      } else {
        this.sign = "O";
      }

      cell.innerText = this.sign;
      this.cellSigns[index] = this.sign;
      // console.log(this.cellSigns);

      if(this.checkVictory()){
        // console.log(`${this.sign} ha vinto`)
        this.$parent.showAlert(`${this.sign} ha vinto`);
      }else if(this.turn === 9){
        this.$parent.showAlert('Pareggio');
      }
    },
    checkVictory() {
      for(let i = 0; i < this.winningCombinations.length; i++){
        const combination = this.winningCombinations[i];

        const a = combination[0];
        const b = combination[1];
        const c = combination[2];

        if (
          this.cellSigns[a] &&
          this.cellSigns[a] === this.cellSigns[b] &&
          this.cellSigns[b] === this.cellSigns[c]
        ) {
          // console.log(true)
          return true;
        }
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
$cell-size: 120px;
$gutter: 60px;

#grid {
  width: calc(($cell-size * 3) + $gutter);
  height: calc(($cell-size * 3) + $gutter);

  // border: 1px solid white;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-between;

  .cell {
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