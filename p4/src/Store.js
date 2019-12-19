import Vue from 'vue'
import Vuex from 'vuex'

const axios = require('axios')

Vue.use(Vuex)

const localStoragePlugin = store => {
  let completions = window.localStorage.getItem('completions')
  completions = completions ? JSON.parse(completions) : {}
  store.commit('setCompletions', completions)

  store.subscribe((_, state) => {
    window.localStorage.setItem(
      'completions',
      JSON.stringify(state.completions)
    )
  })
}

const store = new Vuex.Store({
  plugins: [localStoragePlugin],

  state: {
    completions: {},
    decks: null
  },

  getters: {
    allDecks(state) {
      return state.decks;
    },

    getCompletedCardsByDeckId(state) {
      return function(id) {
        const completedCards = state.completions[id];
        if(completedCards) {
          return completedCards;
        }
        return [];
      }
    },

    getDeckById(state) {
      return function(id) {
        return state.decks[id];
      }
    }
  },

  mutations: {
    addCardToCompleted(state, {card, deck}) {
      let completedCards = this.state.completions[deck.id] || []
      completedCards.push(card.question)
      Vue.set(state.completions, deck.id, completedCards)
    },

    resetProgressForDeck(state, {deckId}) {
      Vue.set(state.completions, deckId, [])
    },

    setCompletions(state, payload) {
      state.completions = payload;
    },

    setDecks(state, payload) {
      state.decks = payload;
    }
  },

  actions: {
    expireCard({commit}, {card, deck}) {
      commit('addCardToCompleted', {card, deck})
    },

    loadDecks({commit}) {
      axios.
        get('https://my-json-server.typicode.com/phildarnowsky/e28_p3_api/decks').
        then(response => {
          let result = {}
          response.data.forEach((deckData) => {
            result[deckData.id] = deckData
          })
          commit('setDecks', result)
        })
    },

    resetProgress({commit}, {deckId}) {
      commit('resetProgressForDeck', {deckId})
    }
  }
})

export default store
