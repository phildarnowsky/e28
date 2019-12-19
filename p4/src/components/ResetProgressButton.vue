<script>
export default {
  name: 'ResetProgressButton',

  props: {
    deckId: Number,
    resetCallback: Function
  },

  methods: {
    resetProgress: function() {
      let completions = window.localStorage.getItem('completions')
      completions = completions ? JSON.parse(completions) : {}
      completions[this.deckId] = []

      window.localStorage.setItem('completions', JSON.stringify(completions))
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
