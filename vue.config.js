const path = require('path')

module.exports = {
	pwa: {
		themeColor: '#4DBA87',
		msTileColor: '#000000',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'black',
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src'),
			},
		},
	},
}
