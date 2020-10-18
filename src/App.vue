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
	color: #fff
	background-color: #202020
	margin: 0
	padding: 0

#app
	font-family: Arial, Helvetica, sans-serif

#main-container
	width: 90%
	margin: 0 auto
</style>
