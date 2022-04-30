
import resolve from "rollup-plugin-node-resolve";  // 帮助寻找node_modules里的包
import babel from 'rollup-plugin-babel' // ES6转ES5
import replace from 'rollup-plugin-replace' // 替换待打包文件里的一些变量，如process在浏览器端是不存在的，需要被替换
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";

const env = process.env.NODE_ENV

export default {
	input: "tsc/lib/index.js", 
	output: { 
		file: 'dist/index.js', 
		format: "umd", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
		name: 'file'
	},
	plugins: [
		resolve(), // 查找和打包node_modules中的第三方模块
		commonjs(), 
		typescript(), // 解析 TypeScript
    babel({
      exclude: 'node_modules/**' // 排除
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    commonjs()
	],
};