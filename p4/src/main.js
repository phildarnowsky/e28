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

const routes = [
  { path: '/', name: "home", component: HomePage },
  { path: '/decks/:deckId', name: "deck", component: DeckPage },
  { path: '/stats', name: "stats", component: StatsPage }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

const store = new Vuex.Store()

new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')
