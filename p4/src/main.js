import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import DeckPage from './pages/DeckPage.vue'
import HomePage from './pages/HomePage.vue'
import StatsPage from './pages/StatsPage.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const axios = require('axios')

const routes = [
  { path: '/', name: "home", component: HomePage },
  { path: '/decks/:deckId', name: "deck", component: DeckPage },
  { path: '/stats', name: "stats", component: StatsPage }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

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

new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')
