'use strict';

module.exports = (baseUrl, opts) => {
  opts = opts || {};

  var params = Object.keys(opts).map(function(item) {
    return item + '=' + encodeURIComponent(opts[item]);
  }).join('&');

  params = params.replace(/%20/g, "+");

  return baseUrl + ((params) ? '?' + params : params);
}
