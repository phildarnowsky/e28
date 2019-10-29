<template>
  <div>
    <button @click='resetCallback'>New game</button>
  </div>
</template>

<script>
  export default {
    name: 'reset-button',
    props: {
      resetCallback: Function
    }
  }
</script>
