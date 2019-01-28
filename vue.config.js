module.exports = {
  devServer: {
    watchOptions: {
      ignored: ['/node_modules/', '/src/assets/bower/'],
      aggregateTimeout: 300,
      poll: 1000
    }
  }
}
