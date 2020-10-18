<template>
	<div id="app-container">
		<hero-nav />
		<main id="main-container">
			<router-view />
		</main>
	</div>
</template>

<script>
import HeroNav from './layouts/HeroNav.vue'

export default {
	components: {
		HeroNav,
	},
}
</script>

<style lang="stylus">
html, body
	margin: 0
	padding: 0

#app
	font-family: Arial, Helvetica, sans-serif

#main-container
	width: 80%
</style>
