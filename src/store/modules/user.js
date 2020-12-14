import { Storage } from '@/core/constants.js'
import storage from '@/core/storage.js'

export default {
	namespaced: true,
	state: JSON.parse(storage.get(Storage.USERS_KEY)) || {
		id: null,
		username: null,
		discriminator: null,
	},
	mutations: {
		clear(state) {
			for (const key of Object.keys(state)) {
				state[key] = null
			}
		},
		set(state, user) {
			for (const [key, value] of Object.entries(user)) {
				state[key] = value
			}
		},
	},
	getters: {
		tag: state => `${state.username}#${state.discriminator}`,
	},
}
