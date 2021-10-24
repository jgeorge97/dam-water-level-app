module.exports = {
  pwa: {
    name: 'Dam Water Level App',
    themeColor: '#7957D5'
  },
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
        args[0].title = "Dam Water Level App";
        return args;
    })
  }
}