'use strict';

module.exports = (url, opts) => {
  opts = opts || {};

  const keys = Object.keys(opts);
  const params = keys
    .map(item => item + '=' + encodeURIComponent(opts[item]))
    .join('&')
    .replace(/%20/g, '+');

  return url + (params ? '?' + params : '');
}
