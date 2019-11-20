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
    const fetchUrl = 'https://my-json-server.typicode.com/phildarnowsky/e28_p3_api/decks/' + this.$route.params.deckId;
    axios.
      get(fetchUrl).
      then(response => {
        this.deck = response.data;
        this.chooseCurrentCard();
      })
  },

  methods: {
    chooseCurrentCard: function() {
      const chosenIndex = Math.floor(Math.random() * this.deck.cards.length);
      this.currentCard = this.deck.cards[chosenIndex];
    }
  }
}
</script>

<template>
  <div>
    <div v-if="deck">
      <h1>{{deck.name}}</h1>

      <Gameboard :currentCard='currentCard' />
    </div>

    <div v-else>
      Loading...
    </div>
  </div>
</template>

<style lang="scss">
</style>
