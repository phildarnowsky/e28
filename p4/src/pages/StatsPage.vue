<script>
export default {
  name: 'StatsPage',

  props: {
    decks: Object
  },

  methods: {
    nCompleted: function(deck) {
      const json = window.localStorage.getItem(deck.id)

      if(json) {
        return JSON.parse(json).length
      } else {
        return 0
      }
    },

    nTotal: function(deck) {
      return deck.cards.length
    }
  }
}
</script>

<template>
  <div>
    <h1>Stats</h1>

    <p v-for="deck in decks" :key="deck.id">
      {{deck.name}}: {{nCompleted(deck)}}/{{nTotal(deck)}}
    </p>

    <router-link :to="{name: 'home'}">
      Return to main page
    </router-link>
  </div>
</template>

<style lang="scss">
</style>
