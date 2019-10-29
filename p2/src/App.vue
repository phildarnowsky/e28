<template>
  <div id="app" v-cloak>
    <p>Let's play a guessing game.</p>

    <p>
      I will think of a number between 1 and 100. You will have 7 chances to
      guess it. I'll help you keep track of your closest low and high guesses.
    </p>

    <div v-if="won">
      <WinMessage :target="target"/>
    </div>
    <div v-else-if='nGuessesRemaining'>
      <GuessesRemaining :nGuessesRemaining='nGuessesRemaining' />
      <ClosestLowGuess :pastGuesses='pastGuesses' :target='target' />
      <ClosestHighGuess :pastGuesses='pastGuesses' :target='target' />
      <GuessForm :pastGuesses='pastGuesses' :guessCallback='makeGuess'/>
    </div>
<!--

      <form @submit.prevent="makeGuess">
        <input type="text" v-model.number="guess" placeholder="Enter a guess..." />
        <button type="submit">Guess!</button>
      </form>
    </div>
    <p v-else>
      Sorry, you're out of guesses. The target number was {{target}}.
    </p>

    <div>
      <button @click='resetGame'>New game</button>
    </div> -->
  </div>
</template>

<script>
  import ClosestLowGuess from "./components/ClosestLowGuess.vue";
  import ClosestHighGuess from "./components/ClosestHighGuess.vue";
  import GuessForm from "./components/GuessForm.vue";
  import GuessesRemaining from "./components/GuessesRemaining.vue";
  import WinMessage from "./components/WinMessage.vue";

  const chooseTarget = function() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const maxNGuesses = 7;

  export default {
    name: 'app',
    components: {
      ClosestLowGuess,
      ClosestHighGuess,
      GuessForm,
      GuessesRemaining,
      WinMessage
    },
    data: function() {
      return {
        pastGuesses: [],
        target: chooseTarget(),
        won: false
      }
    },
    computed: {
      nGuessesRemaining: function() {
        return maxNGuesses - this.pastGuesses.length;
      }
    },
    methods: {
      makeGuess: function(guess) {
        if(guess == this.target) {
          this.won = true;
        } else {
          this.pastGuesses.push(guess);
        }
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
