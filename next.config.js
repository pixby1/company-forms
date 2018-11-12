const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack(config, options) {
    // Further custom configuration here
    return config;
  }
});
