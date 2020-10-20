<template>
	<div class="user-management">
		<div class="user-management-tools">
			<form class="user-create" @submit.prevent="addUser({ ...userForm })">
				<div class="field">
					<label class="label" for="user-id">ID: </label>
					<div class="control">
						<input id="user-id" v-model="userForm.id" class="input" type="number" disabled />
					</div>
				</div>
				<div class="field">
					<label class="label" for="user-username">Username: </label>
					<div class="control">
						<input id="user-username" v-model="userForm.username" class="input" type="text" />
					</div>
				</div>
				<div class="field">
					<label class="label" for="user-discriminator">Discriminator: </label>
					<div class="control">
						<input id="user-discriminator" v-model="userForm.discriminator" class="input" type="number" min="0" />
					</div>
				</div>
				<div class="field">
					<button class="button is-primary" type="submit">Submit</button>
				</div>
			</form>
			<br />
			<form class="user-delete" @submit.prevent="deleteUser(userDeleteID)">
				<div class="field">
					<label class="label" for="user-deletion-id">ID: </label>
					<div class="control">
						<input id="user-deletion-id" v-model.number="userDeleteID" class="input" type="number" />
					</div>
				</div>
				<div class="field">
					<div class="control">
						<button class="button is-danger" type="submit">Delete user</button>
					</div>
				</div>
			</form>
			<br />
			<form class="users-clear" @submit.prevent="clearUsers">
				<div class="field">
					<div class="control">
						<button class="button is-danger" type="submit">Clear users</button>
					</div>
				</div>
			</form>
		</div>
		<div>
			<table class="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Username</th>
						<th>Discriminator</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="user in users" :key="user.id">
						<td>{{ user.id }}</td>
						<td>{{ user.username }}</td>
						<td>{{ user.discriminator }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue'
import { mapMutations, useStore } from 'vuex'

export default {
	name: 'UserManagement',
	setup() {
		const { users } = useStore().state
		const userForm = reactive({
			id: users.length ? users[users.length - 1].id + 1 : 1,
			username: '',
			discriminator: '',
		})

		const userDeleteID = ref(0)

		watchEffect(() => userForm.id = users.length ? users[users.length - 1].id + 1 : 1)

		return {
			users,
			userForm,
			userDeleteID,
			...mapMutations({
				addUser: 'users/add',
				clearUsers: 'users/clear',
				deleteUser: 'users/delete',
			}),
		}
	},
}
</script>
