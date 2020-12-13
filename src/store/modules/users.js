import storage from '@/core/storage.js'

export default {
	namespaced: true,
	state: JSON.parse(storage.get('users')) || [],
	mutations: {
		clear(state) {
			state.splice(0, state.length)
			storage.delete('users')
		},
		add(state, user) {
			state.push(user)
			storage.set('users', JSON.stringify(state))
		},
		delete(state, id) {
			const userIndex = state.findIndex(user => user.id === id)
			if (userIndex < 0) return

			state.splice(userIndex, 1)
			storage.set('users', JSON.stringify(state))
		},
	},
}
