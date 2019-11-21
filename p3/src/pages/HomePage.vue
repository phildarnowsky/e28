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
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  props: {
    decks: Array
  }
}
</script>

<style lang="scss">
</style>
