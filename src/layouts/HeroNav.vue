<template>
	<header id="hero-nav" class="hero is-primary">
		<div class="hero-body">
			<div class="container has-text-centered">
				<h1 class="title">
					<router-link :to="{ name: 'index' }" class="has-text-white">Base Vue App</router-link>
				</h1>
				<h2 class="subtitle has-text-white">
					A Vue 3 template repository
				</h2>
			</div>
		</div>
		<div class="hero-foot">
			<nav-bar />
		</div>
	</header>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
	components: {
		NavBar,
	},
}
</script>

<style lang="sass">
@import "../styles/variables.sass";

// even though the color scheme is set to dark via variables in /src/styles/index.sass,
// this needs to be added because .hero adds its own styles to .tabs when .is-primary is used
#hero-nav.hero.is-primary .tabs.is-boxed li.is-active a,
#hero-nav.hero.is-primary .tabs.is-boxed li.is-active a:hover,
#hero-nav.hero.is-primary .tabs.is-toggle li.is-active a,
#hero-nav.hero.is-primary .tabs.is-toggle li.is-active a:hover
	background-color: $scheme-main
	border-color: $scheme-main-bis
</style>
