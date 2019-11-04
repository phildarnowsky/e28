import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ShowHome from './components/ShowHome.vue';
import ShowProducts from './components/ShowProducts.vue';
import ShowCategories from './components/ShowCategories.vue';

Vue.use(VueRouter);
const routes = [
	{ path: '/', component: ShowHome },
	{ path: '/products', component: ShowProducts },
	{ path: '/categories', component: ShowCategories }
];
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
	router: router
}).$mount('#app')
