import test from 'ava';
import generateUrl from './index';

test('generate a simple url', t => {
  const url = generateUrl('google.com/search', { q: 'test' });
  t.is(url, 'google.com/search?q=test');
});

test('generate url without options', t => {
  const url = generateUrl('http://google.com');
  t.is(url, 'http://google.com');
});

test('generate url with a spaced option', t => {
  const url = generateUrl('http://google.com', {
    q: 'generate url',
    true: 'true',
    test: 'ava'
  });

  t.is(url, 'http://google.com?q=generate+url&true=true&test=ava');
});
