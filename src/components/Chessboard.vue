<template>
  <div>
    <div>
      <h1>Napravite šah-mat s bijelim u što manje poteza!</h1>
      <div class="flex-row">
        <div><h3>Trenutni broj poteza: {{ numOfMoves }}</h3></div>
        <div><button type="button" @click="boardAPI?.resetBoard()">Ispočetka</button></div>
      </div>
    </div>
    <TheChessboard
      :board-config="boardConfig"
      :after-move-cb="incrementMoves"
      @board-created="(api) => (boardAPI = api)"
      @checkmate="handleCheckmate"
    />
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter'
import { useAuthStore } from "../stores/auth";
import { ref } from 'vue';
import { TheChessboard } from 'vue3-chessboard';
import 'vue3-chessboard/style.css';

export default {
  components: {
    TheChessboard
  },
  data() {
    return {
      numOfMoves: 0,
      boardAPI: ref(),
      boardConfig: {
        coordinates: false,
        autoCastle: false
      }
    }
  },
  methods: {
    incrementMoves() {
      const counter = useCounterStore();
      counter.increment();
      this.numOfMoves = counter.count
    },
    handleCheckmate(isMated) {
      const counter = useCounterStore();
      const store = useAuthStore();
      if (isMated === 'black') {
        alert("ŠAH-MAT, BRAVO!!!!")
        this.$emit('checkmate', {
          username: store.username,
          moves: counter.count
        });
        counter.reset();
        this.numOfMoves = counter.count
        this.boardAPI?.resetBoard();
      } else {
        alert('Ooooops... cilj je bio da bijeli pobijedi, pritisnite restart i pokušajte ponovno');
      }
    }
  }
}
</script>

<style>
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
