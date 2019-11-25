module.exports = {
  configureWebpack: {
    resolve: {
      // extensions: [],
      alias: {
        '@': 'src',
        'assets': 'src/assets',
        'common': 'src/common',
        'component': 'src/component',
        'network': 'src/network',
        'views': 'src/views',
      }
    }
  }
}
