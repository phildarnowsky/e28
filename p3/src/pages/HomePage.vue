<template>
  <div>
    <div v-if="decks">
      <h1>Available Decks</h1>

      <ul>
        <li v-for="deck in decks" :key="deck.id">
          {{ deck.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'HomePage',
  data: function() {
    return({
      decks: null
    })
  },
  mounted: function() {
    axios.
      get('https://my-json-server.typicode.com/phildarnowsky/e28_p3_api/decks').
      then(response => {
        this.decks = response.data
      })
  }
}
</script>

<style lang="scss">
</style>
