module.exports = eleventyConfig => {
    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/img/*");

    eleventyConfig.addFilter("randomPost", (arr) => {
        arr.sort(() => {
            return 0.5 - Math.random();
        });
        return arr.slice(0, 1);
    })
    eleventyConfig.addCollection("writeups", function(collectionApi) {
        return collectionApi.getFilteredByTag("writeups");
    });

    return {
        dir: {
            input: 'src',
            output: 'build'
        }
    }
}