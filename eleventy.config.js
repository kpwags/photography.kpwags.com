import pluginWebc from '@11ty/eleventy-plugin-webc';

import readableDateFilter from './src/filters/readable-date.js';
import { photoButton } from './src/shortcodes/photoButton.js';

export default function (eleventyConfig) {
	eleventyConfig.setServerOptions({
		port: 8888,
	});

	eleventyConfig.addPassthroughCopy({
		'./public/': '/',
	});

	eleventyConfig.addPlugin(pluginWebc, {
		components: "./src/_components/**/*.webc",
	});

	eleventyConfig.addFilter('readableDate', readableDateFilter);

	eleventyConfig.addShortcode('photoButton', photoButton)

	return {
		templateFormats: [
			"md",
			"njk",
			"html",
			"liquid",
		],
		dir: {
			input: 'src',
			output: '_site'
		}
	};
};
