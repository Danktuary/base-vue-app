import { createLogger, createStore } from 'vuex'
import user from './modules/user.js'
import users from './modules/users.js'

export default createStore({
	strict: process.env.NODE_ENV !== 'production',
	plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
	modules: {
		user,
		users,
	},
})
