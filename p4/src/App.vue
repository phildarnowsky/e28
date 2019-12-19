<template>
  <div id="app">
    <router-view v-if='decks' :decks='decks' />

    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',

  computed: {
    decks: function() {
      return this.$store.getters.allDecks;
    }
  },

  mounted: function() {
    this.$store.dispatch('loadDecks');
  }
}
</script>

<style>
</style>
