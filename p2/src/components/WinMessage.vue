<template>
  <p id="win-message">
    Congratulations! The number was indeed {{target}}.
  </p>
</template>

<script>
export default {
  name: 'win-message',
  props: {
    target: Number
  }
}
</script>
