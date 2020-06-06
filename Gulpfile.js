

const { src, watch, series, dest } = require('gulp')
const sass = require('gulp-sass')
var browserSync = require('browser-sync').create()


function server() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	})
}


function styles() {
	return src('./sass/main.scss')
		.pipe(sass({
			outputSyle: 'compressed'
		}))
		.pipe(dest('./css/'))
		.pipe(browserSync.stream())
}


exports.server = server
exports.styles = styles

exports.default = () => {
	server()
	watch('./sass/**/*.scss', series(styles))
}

