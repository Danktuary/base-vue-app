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

<style src="./styles/index.sass" lang="sass"></style>
