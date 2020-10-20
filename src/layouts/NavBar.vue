<template>
	<nav class="tabs is-boxed">
		<div class="container">
			<ul>
				<!-- https://next.router.vuejs.org/api/#router-link-s-v-slot -->
				<router-link v-slot="{ href, isActive, navigate }" :to="{ name: 'index' }" custom>
					<li :class="{ 'is-active': isActive }">
						<a :href="href" @click="navigate">Home</a>
					</li>
				</router-link>
				<router-link v-slot="{ href, isActive, navigate }" :to="{ name: 'examples' }" custom>
					<li :class="{ 'is-active': isActive }">
						<a :href="href" @click="navigate">Examples</a>
					</li>
				</router-link>
			</ul>
		</div>
	</nav>
</template>
