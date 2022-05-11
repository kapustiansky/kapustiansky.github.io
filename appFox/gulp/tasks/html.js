import fileinclude from 'gulp-file-include';

export const html = () => {
	return app.gulp
		.src(app.path.src.html)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'HTML',
					message: 'Error <%= error.message %>',
				})
			)
		)
		.pipe(fileinclude())
		.pipe(app.plugins.replace(/@css\//g, './css/css/'))
		.pipe(app.plugins.replace(/@img\//g, './image/'))
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream());
};
