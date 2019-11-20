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
      this.expireCurrentCard()
      const chosenIndex = Math.floor(Math.random() * this.deck.cards.length);
      this.currentCard = this.deck.cards[chosenIndex];
    },

    expireCurrentCard: function() {
      if(this.currentCard) {
        let record = window.localStorage.getItem(this.deck.id);
        if(record) {
          record = JSON.parse(record)
        } else {
          record = []
        }
        record.push(this.currentCard.question)

        window.localStorage.setItem(
          this.deck.id,
          JSON.stringify(record)
        );
      }
    }
  }
}
</script>

<template>
  <div>
    <div v-if="deck">
      <h1>{{deck.name}}</h1>

      <Gameboard :currentCard='currentCard' :checkGuessCallback='chooseCurrentCard' />
    </div>

    <div v-else>
      Loading...
    </div>
  </div>
</template>

<style lang="scss">
</style>
