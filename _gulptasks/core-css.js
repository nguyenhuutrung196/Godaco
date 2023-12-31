import { src, dest } from "gulp";
import concat from "gulp-concat";
import plumber from "gulp-plumber";
import cssnano from "cssnano";
import postcss from "gulp-postcss";
import cssSort from "css-declaration-sorter"
import autoprefixer from "autoprefixer";
import { readFileSync } from "graceful-fs";

export const cssCore = () => {
	let glob = JSON.parse(readFileSync("config.json"));
	return src(glob.css, {
		allowEmpty: true,
	})
		.pipe(plumber())
		.pipe(concat("core.min.css")) // Merge file css
		.pipe(
			postcss([
				autoprefixer(),
				cssnano(),
				cssSort({
					order: "concentric-css",
				}),
			])
		)
		.pipe(dest("dist/css"));
};

module.exports = cssCore;
