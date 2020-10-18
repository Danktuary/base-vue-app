<template>
	<div id="nav-bar">
		<ul class="nav-items">
			<li class="nav-item">
				<router-link :to="{ name: 'index' }">Home</router-link>
			</li>
			<li class="nav-item">
				<router-link :to="{ name: 'about' }">About</router-link>
			</li>
			<li class="nav-item">
				<router-link :to="{ name: 'examples' }">Examples</router-link>
			</li>
		</ul>
	</div>
</template>

<style lang="stylus">
#nav-bar
	background-color: #41b883
	display: flex
	width: 100%

	.nav-items
		display: flex
		list-style: none
		margin: 0
		padding: 0

		.nav-item
			display: inline-flex
			margin: 0 0.25em

			a
				background-color: rgba(0, 0, 0, 0.25)
				padding: 0.5em 1em
</style>
