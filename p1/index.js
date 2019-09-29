const chooseTarget = function() {
  return Math.floor(Math.random() * 100) + 1;
}

const app = new Vue({
  el: '#app',
  data: {
    target: chooseTarget(),
    nGuessesRemaining: 7,
    pastGuesses: []
  },
  methods: {
  }
});
