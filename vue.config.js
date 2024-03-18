
const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');

const chainWebpack = (webpackConfig) => {
    // comment out everything in here to get a vue3 only version
    // plain vue3 without compat mode

    if (process.env.USE_COMPAT) {
        webpackConfig.resolve.alias.set('vue', '@vue/compat');
        webpackConfig.module
            .rule('vue')
            .use('vue-loader')
            .tap((options) => ({
                ...options,
                compilerOptions: {
                    compatConfig: {
                        MODE: 3,
                    },
                },
            }));
    }
};

module.exports = defineConfig({
    chainWebpack,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        // Vue CLI is in maintenance mode, and probably won't merge my PR to fix this in their tooling
        // https://github.com/vuejs/vue-cli/pull/7443
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      })
    ],
  },
});