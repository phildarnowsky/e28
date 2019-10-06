const chooseTarget = function() {
  return Math.floor(Math.random() * 100) + 1;
}

const app = new Vue({
  el: '#app',

  data: {
    guess: null,
    target: chooseTarget(),
    maxGuesses: 7,
    pastGuesses: [],
    won: false
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
    },

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
    },

    nGuessesRemaining: function() {
      return this.maxGuesses - this.pastGuesses.length;
    }
  },

  methods: {
    makeGuess: function() {
      if(this.guess == this.target) {
        this.won = true;
      } else {
        this.pastGuesses.push(this.guess);
        this.guess = null;
      }
    },

    resetGame: function() {
      this.target = chooseTarget();
      this.pastGuesses = [];
      this.won = false;
    }
  }
});
