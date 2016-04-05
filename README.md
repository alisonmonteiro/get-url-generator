# get-url-generator

## Usage

~~~javascript
const generateUrl = require('./index');

generateUrl('http://google.com', {
  q: 'generate url',
  true: 'true',
  test: 'ava'
});
//=> http://google.com?q=generate+url&true=true&test=ava

generateUrl('google.com/search', { q: 'test' });
//=> google.com/search?q=test

generateUrl('http://google.com');
//=> http://google.com
~~~
