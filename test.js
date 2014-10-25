var baboon = require('baboon-image-uri')
var imgAsync = require('./')
var test = require('tape').test

test('loads image', function(t) {
    t.plan(3)

    imgAsync(baboon).then(function(img) {
        t.ok(img)
        t.equal(img.width, 128)
        t.equal(img.height, 128)
    }).catch(function(err) {
        t.error(err)
    })
})

test('fails on undefined path', function(t) {
    t.plan(1)

    imgAsync('undefined').then(function(img) {
        t.fail('should not get to then()')
    }).catch(function(err) {
        t.ok(err)
    })
})