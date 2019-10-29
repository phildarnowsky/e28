<template>
  <div id="app" v-cloak>
    <p>Let's play a guessing game.</p>

    <p>
      I will think of a number between 1 and 100. You will have 7 chances to
      guess it. I'll help you keep track of your closest low and high guesses.
    </p>

    <div>
      <WinMessage :target="target"/>
    </div>
<!--    <div v-else-if='nGuessesRemaining'>
      <p>Guesses remaining: {{nGuessesRemaining}}</p>

      <p v-if='closestLowGuess'>Closest low guess: {{closestLowGuess}}</p>

      <p v-if='closestHighGuess'>Closest high guess: {{closestHighGuess}}</p>

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
  import WinMessage from "./components/WinMessage.vue";

  const chooseTarget = function() {
    return Math.floor(Math.random() * 100) + 1;
  }

  export default {
    name: 'app',
    components: {
      WinMessage
    },
    data: function() {
      return {
        target: chooseTarget()
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
