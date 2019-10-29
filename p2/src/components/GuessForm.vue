<template>
  <form @submit.prevent="makeGuess(guess)">
    <input type="text" v-model.number="guess" placeholder="Enter a guess..." />
    <button type="submit">Guess!</button>
  </form>
</template>

<script>
  export default {
    name: 'guess-form',
    props: {
      guessCallback: Function
    },
    data: function() {
      return {
        guess: null,
        makeGuess: function(guess) {
          this.guessCallback(guess);
          this.guess = null;
        }
      }
    }
  }
</script>
