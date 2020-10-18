const prefix = `${process.env.VUE_APP_STORAGE_PREFIX || 'base-vue-app'}-`

export default {
	prefix,
	get: key => localStorage.getItem(prefix + key),
	set: (key, data) => localStorage.setItem(prefix + key, data),
	'delete': key => localStorage.removeItem(prefix + key),
}
