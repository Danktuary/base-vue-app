<template>
	<div class="user-management">
		<div class="user-management-tools">
			<form class="user-create" @submit.prevent="addUser({ ...userForm })">
				<div>
					<label for="user-id">ID: </label>
					<input id="user-id" v-model="userForm.id" type="number" disabled />
				</div>
				<div>
					<label for="user-username">Username: </label>
					<input id="user-username" v-model="userForm.username" type="text" />
				</div>
				<div>
					<label for="user-discriminator">Discriminator: </label>
					<input id="user-discriminator" v-model="userForm.discriminator" type="number" min="0" max="9999" />
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
			<form @submit.prevent="clearUsers">
				<div>
					<button type="submit">Clear users</button>
				</div>
			</form>
		</div>
		<div>
			<ul>
				<li v-for="user in users" :key="user.id">
					#{{ user.id }}: {{ user.username }}#{{ user.discriminator }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue'
import { mapMutations, useStore } from 'vuex'

export default {
	name: 'UserManagement',
	setup() {
		const store = useStore()
		const { users } = store.state
		const userForm = reactive({
			id: users.length ? users[users.length - 1].id + 1 : 1,
			username: '',
			discriminator: '',
		})

		watchEffect(() => userForm.id = users.length ? users[users.length - 1].id + 1 : 1)

		return {
			users,
			userForm,
			...mapMutations({
				addUser: 'users/add',
				clearUsers: 'users/clear',
			}),
		}
	},
}
</script>

<style lang="stylus">
.user-management
	.user-management-tools
		.user-create
			display: flex
</style>
