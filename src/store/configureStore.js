// B''H //



// --------------------------------------------------------------------------------
// Dynamic imports aren't supported by ES6, so we'll use require instead of import.
//
// See: tools/build.js where process.env.NODE_ENV is set.
// Also see: webpack.config.prod.js where the variable is made available to the libraries that Webpack is bundling.
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
// --------------------------------------------------------------------------------

