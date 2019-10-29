<template>
  <p v-if='closestHighGuess'>Closest high guess: {{closestHighGuess}}</p>
</template>

<script>
  export default {
    name: 'closest-high-guess',
    props: {
      target: Number,
      pastGuesses: Array
    },
    computed: {
      closestHighGuess: function() {
        const target = this.target;
        const highGuesses = this.pastGuesses.filter(
          function(guess) {
            return guess > target;
          }
        );

        if(highGuesses.length == 0) {
          return null;
        }

        return(Math.min(...highGuesses));
      }
    }
  }
</script>
