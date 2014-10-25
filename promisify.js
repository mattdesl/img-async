var img = require('img')

module.exports = function promisifyImgAsync(Promise) {
    return function imgAsync(path) {
        return new Promise(function(resolve, reject) {
            img(path, function(err, el) {
                if (err) reject(err)
                else resolve(el)
            })
        })
    }
}