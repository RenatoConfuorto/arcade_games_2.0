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
import axios from "axios";
import AppLoader from "../../components/AppLoader.vue";
import AppGameData from "../../components/AppGameData.vue";

export default {
  name: "AppTrisSp",
  data() {
    return {
      dataKey: "tris_sp",
      dataObject: {},
      loading: true,
      cells: [],
      cellSigns: [],
      turn: 0,
      sign: "",
      computerTurn: false,
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
  components: {
    AppLoader,
    AppGameData,
  },
  methods: {
    click(event) {
      const cell = event.target;
      const index = this.cells.indexOf(cell);
      if (this.cellSigns[index]) return; //bloccare se già c'è un segno
      if (this.computerTurn) return;

      this.sign = "X";
      cell.innerHTML = this.sign;
      this.cellSigns[index] = this.sign;
      this.turn++;
      this.afterSign();
      this.computerTurn = true;

      setTimeout(this.computerSign, 500);
      console.log("segno");
    },

    computerSign() {
      if(this.turn === 9)return //il gioco è finito
      this.sign = "O";

      for (let i = 0; i < this.winningCombinations.length; i++) {
        const combination = this.winningCombinations[i];

        const a = combination[0];
        const b = combination[1];
        const c = combination[2];

        //controllo primo caso
        if (
          this.cellSigns[a] &&
          this.cellSigns[a] === this.cellSigns[b] &&
          !this.cellSigns[c]
        ) {
          this.cells[c].innerText = this.sign;
          this.cellSigns[c] = this.sign;
          this.turn++;
          this.afterSign();
          this.computerTurn = false;

          return;
          //return necessario altrimenti mette più segni
        } else if (
          this.cellSigns[b] &&
          this.cellSigns[b] === this.cellSigns[c] &&
          !this.cellSigns[a]
        ) {
          this.cells[a].innerText = this.sign;
          this.cellSigns[a] = this.sign;
          this.turn++;
          this.afterSign();
          this.computerTurn = false;

          return;
        } else if (
          this.cellSigns[a] &&
          this.cellSigns[a] === this.cellSigns[c] &&
          !this.cellSigns[b]
        ) {
          this.cells[b].innerText = this.sign;
          this.cellSigns[b] = this.sign;
          this.turn++;
          this.afterSign();
          this.computerTurn = false;

          return;
        }

        //altrimenti segno casuale
      }

      this.casualSign();
      this.computerTurn = false;
    },

    casualSign() {
      const casualNbr = Math.floor(Math.random() * this.cells.length);
      if (this.cellSigns[casualNbr]) {
        this.casualSign();
      } else {
        this.sign = "O";
        this.cells[casualNbr].innerText = this.sign;
        this.cellSigns[casualNbr] = this.sign;

        this.turn++;
        this.afterSign();
      }
    },

    checkVictory() {
      for (let i = 0; i < this.winningCombinations.length; i++) {
        const combination = this.winningCombinations[i];

        const a = combination[0];
        const b = combination[1];
        const c = combination[2];

        if (
          this.cellSigns[a] &&
          this.cellSigns[a] === this.cellSigns[b] &&
          this.cellSigns[b] === this.cellSigns[c]
        ) {
          return true;
        }
      }
      return false;
    },

    afterSign() {
      
      if (this.checkVictory()) {
        //sign ha vinto
        console.log(`${this.sign} ha vinto`);
      } else if (this.turn === 9) {
        //pareggio
        console.log("pareggio");
      }

    },
  },
  created() {
    axios
      .get("http://localhost/arcade_games_2.0/src/assets/php/server.php", {
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
    this.cells = Array.from(nodeListCells); //trasformare laa nodeList in un array
    console.log(this.cells);
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
