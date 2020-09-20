/* config-overrides.js */
const resolve = dir => require('path').resolve(__dirname, dir);

module.exports = function override(config) {
	//do stuff with the webpack config...
	config.resolve = {
		// 设置别名
		alias: {
			'@src': resolve('src'),// src 目录
			'@comp': resolve('src/components'),
			'@utils': resolve('src/utils'),
			'@api': 'src/api'
		}
	};
	return config;
};