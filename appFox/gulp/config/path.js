import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = rootFolder;
const srcFolder = './src';

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		js_lib: `${buildFolder}/js/`,
		css: `${buildFolder}/css/css/`,
		html: `${buildFolder}/`,
		files: `${buildFolder}/files/`,
		images: `${buildFolder}/image/`,
		fonts: `${buildFolder}/css/css/fonts/`,
	},
	src: {
		js: `${srcFolder}/js/script.js`,
		js_lib: `${srcFolder}/js/*.js`,
		scss: `${srcFolder}/scss/scss/style.scss`,
		css_lib: `${srcFolder}/css/css/*.css`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`,
		images: `${srcFolder}/image/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/image/**/*.svg`,
		//svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		js_lib: `${srcFolder}/js/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		css_lib: `${srcFolder}/css/css/*.css`,
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/files/**/*.*`,
		images: `${srcFolder}/image/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
};
