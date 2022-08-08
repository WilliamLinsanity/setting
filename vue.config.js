const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	runtimeCompiler: true,
	devServer      : {
		port: 4000,
	},
	chainWebpack: (config) => {
		config.resolve.alias.set('@$', resolve('src'))
	},
	css: {
		loaderOptions: {
			scss: {

			},
			less: {
				modifyVars: {
				},
				javascriptEnabled: true,
			},
		},
	},
}
