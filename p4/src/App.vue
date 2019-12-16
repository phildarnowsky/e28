<template>
  <div id="app">
    <router-view v-if='decks' :decks='decks' />

    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'app',

  data: function() {
    return({
      decks: null
    })
  },

  methods: {
    buildDecks: function(data) {
      let result = {}
      data.forEach((deckData) => {
        result[deckData.id] = deckData
      })

      this.decks = result
    }
  },

  mounted: function() {
    axios.
      get('https://my-json-server.typicode.com/phildarnowsky/e28_p3_api/decks').
      then(response => {
        this.buildDecks(response.data)
      })
  }
}
</script>

<style>
</style>
