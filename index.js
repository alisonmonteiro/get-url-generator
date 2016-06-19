'use strict';

module.exports = (url, opts) => {
  opts = opts || {};

  let params = Object.keys(opts).map(function(item) {
    return item + '=' + encodeURIComponent(opts[item]);
  });

  params = params
    .join('&')
    .replace(/%20/g, '+');

  return url + (params ? '?' + params : params);
}
