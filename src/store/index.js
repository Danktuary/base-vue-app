import { createStore } from 'vuex'
import user from './modules/user.js'
import users from './modules/users.js'

export default createStore({
	modules: {
		user,
		users,
	},
})
