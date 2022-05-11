import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
	return app.gulp
		.src(`${app.path.srcFolder}/css/css/fonts/*.otf`, {})
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'FONTS',
					message: 'Error <%= error.message %>',
				})
			)
		)
		.pipe(
			fonter({
				formats: ['ttf'],
			})
		)
		.pipe(app.gulp.dest(`${app.path.srcFolder}/css/css/fonts/`));
};

export const ttfToWoff = () => {
	return app.gulp
		.src(`${app.path.srcFolder}/css/css/fonts/*.ttf`, {})
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'FONTS',
					message: 'Error <%= error.message %>',
				})
			)
		)
		.pipe(
			fonter({
				formats: ['woff'],
			})
		)
		.pipe(app.gulp.dest(`${app.path.build.fonts}`))
		.pipe(app.gulp.src(`${app.path.srcFolder}/css/css/fonts/*.ttf`))
		.pipe(ttf2woff2())
		.pipe(app.gulp.dest(`${app.path.build.fonts}`));
};

export const fontsStyle = () => {
	let fontsFile = `${app.path.srcFolder}/scss/scss/fonts.scss`;
	fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
		if (fontsFiles) {
			if (!fs.existsSync(fontsFile)) {
				fs.writeFile(fontsFile, '', cb);
				let newFileOnly;
				for (let i = 0; i < fontsFiles.length; i++) {
					let fontFileName = fontsFiles[i].split('.')[0];
					if (newFileOnly !== fontFileName) {
						// let fontName = fontFileName.split('-')[0]
						// 	? fontFileName.split('-')[0]
						// 	: fontFileName;
						let fontName = `'${fontFileName}'`;
						let fontWeigth = fontFileName.split('-')[1]
							? fontFileName.split('-')[1]
							: fontFileName;
						if (
							fontWeigth.toLowerCase() === 'thin' ||
							fontWeigth.toLowerCase() === 'thinitalic'
						) {
							fontWeigth = 100;
						} else if (
							fontWeigth.toLowerCase() === 'extralight' ||
							fontWeigth.toLowerCase() === 'extralightitalic'
						) {
							fontWeigth = 200;
						} else if (
							fontWeigth.toLowerCase() === 'light' ||
							fontWeigth.toLowerCase() === 'lightitalic'
						) {
							fontWeigth = 300;
						} else if (
							fontWeigth.toLowerCase() === 'medium' ||
							fontWeigth.toLowerCase() === 'mediumitalic'
						) {
							fontWeigth = 500;
						} else if (
							fontWeigth.toLowerCase() === 'semibold' ||
							fontWeigth.toLowerCase() === 'semibolditalic'
						) {
							fontWeigth = 600;
						} else if (
							fontWeigth.toLowerCase() === 'bold' ||
							fontWeigth.toLowerCase() === 'bolditalic'
						) {
							fontWeigth = 700;
						} else if (
							fontWeigth.toLowerCase() === 'extrabold' ||
							fontWeigth.toLowerCase() === 'heavy' ||
							fontWeigth.toLowerCase() === 'extrabolditalic' ||
							fontWeigth.toLowerCase() === 'extrabolditalic'
						) {
							fontWeigth = 800;
						} else if (
							fontWeigth.toLowerCase() === 'black' ||
							fontWeigth.toLowerCase() === 'blackitalic'
						) {
							fontWeigth = 900;
						} else {
							fontWeigth = 400;
						}
						fs.appendFile(
							fontsFile,
							`@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url('./fonts/${fontFileName}.woff2') format('woff2'), url('./fonts/${fontFileName}.woff') format('woff');\n\tfont-weight: ${fontWeigth};\n\tfont-style: normal;\n}\r\n`,
							cb
						);
						newFileOnly = fontFileName;
					}
				}
			} else {
				console.log(
					'Файл scss/fonts.scss уже существует. Для обновления его нужно удалить.'
				);
			}
		}
	});

	return app.gulp.src(`${app.path.srcFolder}`);
	function cb() {}
};
