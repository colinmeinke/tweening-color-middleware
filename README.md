# Tweening color middleware

Color middleware for [tweening](https://github.com/colinmeinke/tweening).

**1.1kb gzipped.**

## Usage

Currently supports hex, rgb and rgba colors:

```js
import tween from 'tweening';
import colorMiddleware from 'tweening-color-middleware';

tween({
  from: '#000',
  to: '#F0F0F0',
  duration: 5000,
  middleware: [ colorMiddleware ],
  next: color => console.log( color ),
});
```

## CommonJS

This is how you get to the good stuff if you're using
`require`.

```js
const TweeningColorMiddleware = require( 'tweening-color-middleware' );
const colorMiddleware = TweeningColorMiddleware.default;
```

## UMD

And if you just want to smash in a Javascript file you're
also covered. Drop this in place ...

[https://npmcdn.com/tweening-color-middleware@1.1.0/dist/tweening-color-middleware.min.js](https://npmcdn.com/tweening-color-middleware@1.1.0/dist/tweening-color-middleware.min.js)

Then access it on the `TweeningColorMiddleware` global variable.

```js
const colorMiddleware = TweeningColorMiddleware.default;
```

## Help make this better

[Issues](https://github.com/colinmeinke/tweening-color-middleware/issues/new)
and pull requests gratefully received!

I'm also on twitter [@colinmeinke](https://twitter.com/colinmeinke).

Thanks :star2:

## License

[ISC](./LICENSE.md).
