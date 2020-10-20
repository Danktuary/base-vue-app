<template>
	<div class="user-profile">
		User profile
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'UserProfile',
	setup() {
		return {
			...mapState(['user']),
		}
	},
}
</script>

<style lang="sass">

</style>
