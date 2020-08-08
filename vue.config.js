// vue.config.js
module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule("sass").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: ["./src/sass/colors.sass", "./src/sass/grid.sass"]
        })
        .end();
    });
  }
};
