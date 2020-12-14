import { Storage } from '@/core/constants.js'
import storage from '@/core/storage.js'

export default {
	namespaced: true,
	state: JSON.parse(storage.get(Storage.USERS_KEY)) || [],
	mutations: {
		clear(state) {
			state.splice(0, state.length)
		},
		add(state, user) {
			state.push(user)
		},
		delete(state, id) {
			const userIndex = state.findIndex(user => user.id === id)
			if (userIndex < 0) return

			state.splice(userIndex, 1)
		},
	},
}
