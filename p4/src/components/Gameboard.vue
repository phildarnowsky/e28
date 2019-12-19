<script>
import { required } from 'vuelidate/lib/validators'
import ResetProgressButton from './ResetProgressButton.vue'

export default {
  name: 'Gameboard',

  components: {ResetProgressButton},

  data: function() {
    return ({
      guess: null,
      rightGuessCopy: null,
      wrongGuessCopy: null
    })
  },

  validations: {
    guess: { required }
  },

  props: {
    currentCard: Object,
    deckId: Number,
    resetIfCompleteCallback: Function,
    rightGuessCallback: Function
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
      if(this.$v.guess.$invalid) {
        alert("Please enter a guess")
        return
      }

      if(this.guessIsCorrect(guess)) {
        this.rightGuessCopy = `Correct! "${this.currentCard.question}" is "${this.currentCard.canonical_answer}"`
        this.wrongGuessCopy = null
        setTimeout(() => {
          this.rightGuessCopy = null
          this.rightGuessCallback()
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

    resetIfComplete: function() {
      if(!this.currentCard) {
        this.resetIfCompleteCallback()
      }
    }
  }
}
</script>

<template>
  <div>
    <div v-if='currentCard'>
      <h2>{{currentCard.question}}</h2>
      <form v-if='!rightGuessCopy' @submit.prevent='checkGuess(guess)'>
        <input type="text" v-model="$v.guess.$model" placeholder="Enter a guess..." />
        <button type="submit">Guess!</button>
      </form>

      <div v-if='rightGuessCopy'>
        {{rightGuessCopy}}
      </div>

      <div v-if='wrongGuessCopy'>
        {{wrongGuessCopy}}
      </div>
    </div>

    <div v-else>
      Congratulations! You've completed all the cards in this deck.
    </div>

    <ResetProgressButton :deckId='deckId' :resetCallback='resetIfComplete' />
  </div>
</template>

<style lang="scss">
</style>
