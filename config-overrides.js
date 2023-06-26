const { alias } = require('react-app-rewire-alias');
const { useBabelRc, override } = require('customize-cra');

module.exports = function override(config) {
  useBabelRc()
  alias({
    '@src': 'src',
  })(config);

  return config;
};