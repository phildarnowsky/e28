<template>
  <div id="app">
    <img alt="ZipFoods logo" src="./assets/images/zipfoods-logo.png" id="logo" />

		<nav>
			<ul>
				<li v-for='link in links' :key='link'>
					<router-link :to='{ name: link }' exact>{{ link }}</router-link>
				</li>
			</ul>
		</nav>
    <RouterView />
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function() {
		return {
			links: ['home', 'products', 'categories'],
			paths: {
				home: '/',
				products: '/products',
				categories: '/categories'
			}
		}
	}
}
</script>

<style lang="scss">
  @import './assets/css/zipfoods.scss';
</style>
