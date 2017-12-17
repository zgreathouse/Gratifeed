//dynamic key requirement based on environment (Production or Development)
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./devKeys');
}
