module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['css-loader'],
    })

    return config
  },
}
