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

  mounted: function() {
    axios.
      get('https://my-json-server.typicode.com/phildarnowsky/e28_p3_api/decks').
      then(response => {
        this.decks = response.data
      })
  }
}
</script>

<style>
</style>
