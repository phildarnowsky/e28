<script>
export default {
  name: 'ResetProgressButton',

  props: {
    deckId: Number,
    resetCallback: Function
  },

  methods: {
    resetProgress: function() {
      window.localStorage.removeItem(this.deckId)
      this.resetCallback && this.resetCallback()
    }
  }
}
</script>

<template>
  <button @click='resetProgress'>Reset Progress</button>
</template>

<style lang="scss">
</style>
