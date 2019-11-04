<template>
	<div>
		<h2>Categories</h2>
		<ul class='cleanList'>
			<li v-for='(category, id) in categories' :key='id'>{{ category }}</li>
		</ul>
	</div>
</template>

<script>
  import { products } from "../products";

  export default {
    data: function() { return({ products: products })},
    computed: {
      categories: function() {
        const categories = this.products.map(product => product.categories);
        const mergedCategories = [].concat.apply([], categories);

        // Return unique, sorted categories
        return [...new Set(mergedCategories)].sort();
      }
    }
  }
</script>
