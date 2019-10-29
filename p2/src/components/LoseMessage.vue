<template>
  <p>Sorry, you're out of guesses. The target number was {{target}}.</p>
</template>

<script>
  export default {
    name: 'lose-message',
    props: {
      target: Number
    }
  }
</script>

