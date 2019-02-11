const get = require('lodash').get;

module.exports = function (errorDetails) {
  if (errorDetails.errors && errorDetails.errors.length > 0) {
    return get(errorDetails, 'errors[0].message', 'We have some technical difficulties. Please try again.');
  }
  return get(errorDetails, 'message', 'We have some technical difficulties. Please try again.');
};

