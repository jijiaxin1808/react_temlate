// /* config-overrides.js */
const resolve = dir => require('path').resolve(__dirname, dir);
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');

module.exports = override(
	// antd
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
	// 这里配置less
	addLessLoader({
		strictMath: true,
		noIeCompat: true,
		modifyVars: {
			'@primary-color': 'red', // 在这里配置主题
		},
		cssLoaderOptions: {},
		cssModules: {
			localIdentName: '[path][name]__[local]--[hash:base64:5]',
		},
		patterns: [resolve('../src/common.less')]
	}),
	// 这里配置目录的别名
	addWebpackAlias({
		'@src': resolve('src'),// src 目录
		'@comp': resolve('src/components'),
		'@utils': resolve('src/utils'),
		'@api': 'src/api'
	})
);
