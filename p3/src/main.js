import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import DeckPage from './pages/DeckPage.vue'
import HomePage from './pages/HomePage.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', name: "home", component: HomePage },
  { path: '/decks/:deckId', name: "deck", component: DeckPage }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
