const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()]
  }
}