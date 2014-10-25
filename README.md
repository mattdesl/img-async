# img-async

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Wraps [img](https://github.com/npm-dom/img) for Promises.

Uses Bluebird by default, but you can provide a different implementation like so:

```js
var Promise = require('q')
//returns the promisified function
var qImgAsync = require('img-async/promisify')(Promise)

qImgAsync('foo.gif')
    .then(function(img) {
        console.log("Loaded", img)
    })
```

## Usage

[![NPM](https://nodei.co/npm/img-async.png)](https://nodei.co/npm/img-async/)

#### `imgAsync(path[, options])`

Returns a promise of the image load which resolves with that element when the image is loaded, or rejects when the image was not able to load. 

Optional parameters for `options`:

- `crossOrigin` the crossOrigin string


e.g.

```js
require('img-async')('foo.gif', { crossOrigin: 'Anonymous' })
    .then(function(img) {
        document.body.appendChild(img)
    })
```

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/img-async/blob/master/LICENSE.md) for details.
