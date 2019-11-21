<script>
import Gameboard from '../components/Gameboard.vue'

const axios = require('axios')

export default {
  name: 'DeckPage',

  components: {Gameboard},

  data: function() {
    return({
      currentCard: null,
      deck: null
    })
  },

  mounted: function() {
    const fetchUrl = 'https://my-json-server.typicode.com/phildarnowsky/e28_p3_api/decks/' + this.$route.params.deckId
    axios.
      get(fetchUrl).
      then(response => {
        this.deck = response.data
        this.chooseCurrentCard()
      })
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
    <div v-if="deck">
      <h1>{{deck.name}}</h1>

      <Gameboard
        :currentCard='currentCard'
        :deckId='deck.id'
        :resetIfCompleteCallback='chooseCurrentCard'
        :rightGuessCallback='chooseCurrentCard'
      />
    </div>

    <div v-else>
      Loading...
    </div>
  </div>
</template>

<style lang="scss">
</style>
