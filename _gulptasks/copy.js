import { src, dest } from 'gulp'
import { readFileSync } from 'graceful-fs'
import gulpSquoosh from 'gulp-squoosh'
import gulpCache from 'gulp-cache'

export const copyImage = () => {
	return src(
		'src/assets/img/**/**.{svg,png,jpg,speg,gif,jpge,PNG,JPGE,JPG,SVG,GIF,SPEG,mp4}'
	).pipe(dest('dist/img'))
}

export const copyFonts = () => {
	let glob = JSON.parse(readFileSync('config.json'))
	return src(glob.font, {
		allowEmpty: true,
	}).pipe(dest('dist/fonts'))
}

export const copyFavicon = () => {
	return src('src/assets/favicon.ico', {
		allowEmpty: true,
	}).pipe(dest('dist'))
}

module.exports = {
	copyFonts,
	copyImage,
	copyFavicon,
}
