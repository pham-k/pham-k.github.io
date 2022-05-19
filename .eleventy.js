module.exports = eleventyConfig => {
    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/img/*");

    eleventyConfig.addFilter("randomPost", (arr) => {
        arr.sort(() => {
            return 0.5 - Math.random();
        });
        return arr.slice(0, 1);
    })

    return {
        dir: {
            input: 'src',
            output: 'build'
        }
    }
}