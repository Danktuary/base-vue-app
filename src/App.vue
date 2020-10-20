<template>
	<div id="app-container">
		<hero-nav />
		<section class="section">
			<div class="container">
				<main class="box has-background-dark has-text-light has-text-link-light">
					<router-view />
				</main>
			</div>
		</section>
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
