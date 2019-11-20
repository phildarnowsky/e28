<script>
export default {
  name: 'Gameboard',

  data: function() {
    return ({
      guess: null,
      rightGuessCopy: null,
      wrongGuessCopy: null
    })
  },

  props: {
    checkGuessCallback: Function,
    currentCard: Object
  },

  computed: {
    validAnswers: function() {
      const validAnswers = [
        this.currentCard.canonical_answer,
        ...this.currentCard.alternate_answers
      ]
      const downcasedAnswers = validAnswers.map((answer) => answer.toLowerCase())
      return new Set(downcasedAnswers)
    }
  },

  methods: {
    checkGuess: function(guess) {
      if(this.guessIsCorrect(guess)) {
        this.rightGuessCopy = `Correct! "${this.currentCard.question}" is "${this.currentCard.canonical_answer}"`
        this.wrongGuessCopy = null
        setTimeout(() => {
          this.rightGuessCopy = null
          this.checkGuessCallback()
        }, 2000)
      } else {
        this.rightGuessCopy = null
        this.wrongGuessCopy = `Sorry, "${guess}" isn't right.`
      }
      this.guess = '';
    },

    guessIsCorrect: function(guess) {
      const normalizedGuess = guess.trim().toLowerCase()
      return this.validAnswers.has(normalizedGuess)
    },
  }
}
</script>

<template>
  <div>
    <div v-if={currentCard}>
      <h2>{{currentCard.question}}</h2>
      <form @submit.prevent='checkGuess(guess)'>
        <input type="text" v-model="guess" placeholder="Enter a guess..." />
        <button type="submit">Guess!</button>
      </form>

      <div v-if={rightGuessCopy}>
        {{rightGuessCopy}}
      </div>

      <div v-if={wrongGuessCopy}>
        {{wrongGuessCopy}}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>
