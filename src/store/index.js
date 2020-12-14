import { createLogger, createStore } from 'vuex'
import { Storage } from '@/core/constants.js'
import storage from '@/core/storage.js'
import user from './modules/user.js'
import users from './modules/users.js'

const store = createStore({
	strict: process.env.NODE_ENV !== 'production',
	plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
	modules: {
		user,
		users,
	},
})

store.subscribe(({ type, payload }) => {
	if (type === 'user/clear') storage.delete(Storage.USER_KEY)
	if (type === 'users/clear') storage.delete(Storage.USERS_KEY)

	if (type === 'user/set') storage.set(Storage.USER_KEY, JSON.stringify(payload))
	if (['users/add', 'users/delete'].includes(type)) storage.set(Storage.USERS_KEY, JSON.stringify(payload))
})

export default store
