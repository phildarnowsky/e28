<script>
const axios = require('axios')

export default {
  name: 'DeckPage',
  data: function() {
    return({
      deck: null
    })
  },
  mounted: function() {
    const fetchUrl = 'https://my-json-server.typicode.com/phildarnowsky/e28_p3_api/decks/' + this.$route.params.deckId;
    axios.
      get(fetchUrl).
      then(response => {
        this.deck = response.data
      })
  }
}
</script>

<template>
  <div>
  </div>
</template>

<style lang="scss">
</style>
