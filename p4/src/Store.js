import Vue from 'vue'
import Vuex from 'vuex'

const axios = require('axios')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    decks: []
  },
  getters: {
    allDecks(state) {
      return state.decks;
    },

    getDeckById(state) {
      return function(id) {
        return state.decks[id];
      }
    }
  },
  mutations: {
    setupDecks(state, payload) {
      state.decks = payload;
    }
  },
  actions: {
    loadDecks({commit}) {
      axios.
        get('https://my-json-server.typicode.com/phildarnowsky/e28_p3_api/decks').
        then(response => {
          commit('setupDecks', response.data)
        })
    }
  }
})

export default store
