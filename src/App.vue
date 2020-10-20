<template>
	<div id="app-container">
		<hero-nav />
		<section class="section">
			<div class="container">
				<main class="box">
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
<style lang="sass">
#app-container main.box
	border: 1px solid rgba(#000, 0.1)
</style>
