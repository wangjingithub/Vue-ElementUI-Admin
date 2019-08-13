module.exports = {
    publicPath:'./',
    lintOnSave: false,
    productionSourceMap:false,
    devServer:{
        port:8001
    },
    configureWebpack: {
        devtool: 'source-map'
      }
}