<template>
  <p v-if='closestLowGuess'>Closest low guess: {{closestLowGuess}}</p>
</template>

<script>
  export default {
    name: 'closest-low-guess',
    props: {
      target: Number,
      pastGuesses: Array
    },
    computed: {
      closestLowGuess: function() {
        const target = this.target;
        const lowGuesses = this.pastGuesses.filter(
          function(guess) {
            return guess < target;
          }
        );

        if(lowGuesses.length == 0) {
          return null;
        }

        return(Math.max(...lowGuesses));
      }
    }
  }
</script>
