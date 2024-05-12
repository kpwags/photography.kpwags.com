const pluginWebc = require('@11ty/eleventy-plugin-webc');

const readableDateFilter = require('./src/filters/readable-date.js')

module.exports = function (eleventyConfig) {
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
