<script>
import Gameboard from '../components/Gameboard.vue'

export default {
  name: 'DeckPage',

  components: {Gameboard},

  data: function() {
    return({
      currentCard: null
    })
  },

  computed: {
    deck: function() {
      const id = this.$route.params.deckId
      return this.$store.getters.getDeckById(id)
    }
  },

  mounted: function() {
    this.chooseCurrentCard()
  },

  methods: {
    cardNotYetDone: function(card) {
      const match = this.getCompletedCards().find((completedCard) =>
        completedCard == card.question
      )

      return !match
    },

    chooseCurrentCard: function() {
      this.expireCurrentCard()

      const completedCards = this.getCompletedCards()
      if(completedCards.length == this.deck.cards.length) {
        this.currentCard = null
        return
      }

      let chosenCard = null
      let potentialCard = null

      while(chosenCard == null) {
        const chosenIndex = Math.floor(Math.random() * this.deck.cards.length)
        potentialCard = this.deck.cards[chosenIndex]
        if(this.cardNotYetDone(potentialCard)) {
          chosenCard = potentialCard
        }
      }

      this.currentCard = chosenCard
    },

    expireCurrentCard: function() {
      if(this.currentCard) {
        let completedCards = this.getCompletedCards()
        completedCards.push(this.currentCard.question)

        let completions = this.getCompletions()
        completions[this.deck.id] = completedCards

        window.localStorage.setItem(
          'completions',
          JSON.stringify(completions)
        )
      }
    },

    getCompletedCards: function() {
      const record = this.getCompletions()[this.deck.id]
      return record || []
    },

    getCompletions: function() {
      const completions = window.localStorage.getItem('completions')
      if(completions) {
        return(JSON.parse(completions))
      } else {
        return({})
      }
    }
  }
}
</script>

<template>
  <div>
    <h1>{{deck.name}}</h1>

    <Gameboard
      :currentCard='currentCard'
      :deckId='deck.id'
      :resetIfCompleteCallback='chooseCurrentCard'
      :rightGuessCallback='chooseCurrentCard'
    />

    <router-link :to="{name: 'home'}">
      Return to main page
    </router-link>
  </div>
</template>

<style lang="scss">
</style>
