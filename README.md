# get-url-generator

## Install

```
$ npm install get-url-generator --save
```

## Usage

```javascript
const generateUrl = require('get-url-generator');

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
```
