# next-is-reachable
> Check if port reachable.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-is-reachable
```

## usage
```js
import '@jswork/next-is-reachable';

nx.isReachable({ port: 80, host: 'www.baidu.com' }).then((res) => {
  // true
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-is-reachable/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-is-reachable
[version-url]: https://npmjs.org/package/@jswork/next-is-reachable

[license-image]: https://img.shields.io/npm/l/@jswork/next-is-reachable
[license-url]: https://github.com/afeiship/next-is-reachable/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-is-reachable
[size-url]: https://github.com/afeiship/next-is-reachable/blob/master/dist/next-is-reachable.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-is-reachable
[download-url]: https://www.npmjs.com/package/@jswork/next-is-reachable
