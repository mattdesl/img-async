# img-async

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Wraps [img](https://github.com/npm-dom/img) for Promises.

```js
var img = require('img-async')

img('path/to/file.png')
    .then(function(el) {
        document.body.appendChild(el)
    })
```

This becomes more useful when you take advantage of other promise features. For example, a complete preloader with Bluebird could look like this:

```js
var Promise = require('bluebird')
var imgAsync = require('img-async')
 
var noop = function() {}
 
module.exports = function(paths, progress, options) {
    progress = progress||noop
    var count = 0
    return Promise.map(paths, function(file, index, total) {
        return imgAsync(file)
            .then(function(img) {
                progress(++count / total)
                return img
            })
    }, options)
}
```

And it could be used like so:

```js
//update progress bar.. 
function tick(percent) {
    console.log(percent)
}
 
//optionally specify a concurrency limit
preload(images, tick, { concurrency: 3 })
    .then(function(images) {
        console.log("all images loaded")
    })
```

## Promise implementation

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
