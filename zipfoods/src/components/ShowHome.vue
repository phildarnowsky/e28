<template>
	<div>
		<p>ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area.</p>

		<show-featured category='frozen'></show-featured>
	</div>
</template>

<script>
  import ShowFeatured from "./ShowFeatured";

  export default {
    name: 'ShowHome',
    components: { ShowFeatured }
  };
</script>
