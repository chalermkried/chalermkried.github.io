const withTM = require('next-transpile-modules')(['zustand'])

module.exports = withTM({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['css-loader'],
    })

    return config
  },
})
