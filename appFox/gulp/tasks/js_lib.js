export const js_lib = () => {
	return app.gulp
		.src(app.path.src.js_lib)
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
};
