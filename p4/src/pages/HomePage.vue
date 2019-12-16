<template>
  <div>
    <h1>Available Decks</h1>

    <ul>
      <li v-for="deck in decks" :key="deck.id">
        <router-link :to="{name: 'deck', params: {deckId: deck.id}}">
          {{ deck.name }}
        </router-link>
      </li>
    </ul>

    <router-link :to="{name: 'stats'}">
      View stats
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  props: {
    decks: Object
  }
}
</script>

<style lang="scss">
</style>
