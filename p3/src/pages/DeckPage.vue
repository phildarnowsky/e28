<script>
import Gameboard from '../components/Gameboard.vue'

export default {
  name: 'DeckPage',

  components: {Gameboard},

  props: {
    decks: Array
  },

  data: function() {
    return({
      currentCard: null
    })
  },

  computed: {
    deck: function() {
      return this.decks[this.$route.params.deckId];
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

        window.localStorage.setItem(
          this.deck.id,
          JSON.stringify(completedCards)
        )
      }
    },

    getCompletedCards: function() {
      const record = window.localStorage.getItem(this.deck.id)
      if(record) {
        return(JSON.parse(record))
      } else {
        return([])
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
  </div>
</template>

<style lang="scss">
</style>
