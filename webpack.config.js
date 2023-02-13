const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	// css 파일도 build가능하게
	module: {
		rules: [
			{
				test: /\.css$/,
				// use: ["style-loader", "css-loader"], // css-loader부터 실행됨 - 내부에 적용
				use: [MiniCssExtractPlugin.loader, "css-loader"], // 외부로 부터 가져와서 적용
			},
			{
				test: /\.jpeg$/,
				use: ["file-loader"],
			},
		],
	},
	// dist 파일에 html 생성
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "common.css",
		}),
		new CleanWebpackPlugin(),
	],
	// html live server가 아닌 dev환경에서 직접실행
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		port: 8080,
	},
};
