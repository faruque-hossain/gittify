var expect = require('chai').expect

var family = require('./index')

describe('family names', function () {
  describe('all', function () {
    it('should be an array of strings', function () {
      expect(family.all).to.satisfy(isArrayOfStrings)

      function isArrayOfStrings () {
        return family.all.every(function checker (name) {
          return typeof name === 'string'
        })
      }
    })
    it('should contain `Nur Rony`', function () {
      expect(family.all).to.include('Nur Rony')
    })
  })
  // random
  describe('random', function () {
    it('should return a random name from `family.all`', function () {
      var randomItem = family.random()
      expect(family.all).to.include(randomItem)
    })
  })
})
