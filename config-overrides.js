const path = require('path');

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@components': path.resolve(__dirname, 'src/components/'),
    '@store': path.resolve(__dirname, 'src/store/'),
    '@assets': path.resolve(__dirname, 'src/assets/'),
    '@styles': path.resolve(__dirname, 'src/styles/'),
    '@API': path.resolve(__dirname, 'src/API/'),
  };
  return config;
};
