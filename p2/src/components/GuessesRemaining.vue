<template>
  <p>Guesses remaining: {{nGuessesRemaining}}</p>
</template>

<script>
  export default {
    name: 'guesses-remaining',
    props: {
      nGuessesRemaining: Number
    }
  }
</script>
