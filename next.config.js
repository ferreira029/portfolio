const withImages = require('next-images')
module.exports = withImages({
  ignoreTypes: ['svg', 'png', 'jpg', 'jpge', 'gif'],
  webpack(config, options) {
    return config
  }
})