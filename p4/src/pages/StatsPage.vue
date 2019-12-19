<script>
export default {
  name: 'StatsPage',

  methods: {
    nCompleted: function(deck) {
      return this.$store.getters.getCompletedCardsByDeckId(deck.id).length
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

    <p v-for="deck in this.$store.getters.allDecks" :key="deck.id">
      {{deck.name}}: {{nCompleted(deck)}}/{{nTotal(deck)}}
    </p>

    <router-link :to="{name: 'home'}">
      Return to main page
    </router-link>
  </div>
</template>

<style lang="scss">
</style>
