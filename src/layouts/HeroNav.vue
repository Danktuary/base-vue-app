<template>
	<header class="hero is-primary">
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
