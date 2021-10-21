module.exports = {
  pwa: {
    name: 'Dam Water Level App'
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