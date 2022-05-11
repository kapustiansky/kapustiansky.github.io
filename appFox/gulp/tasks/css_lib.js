export const css_lib = () => {
	return app.gulp
		.src(app.path.src.css_lib)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream());
};
