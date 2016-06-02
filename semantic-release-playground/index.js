var familyMembers = require('./family-members.json')
var uniqueRandomArray = require('unique-random-array')
var randomName = uniqueRandomArray(familyMembers)
module.exports = {
  all: familyMembers,
  random: random
}

function random (number) {
  if (typeof number === 'undefined') {
    return randomName()
  }
  var items = []

  for (var i = 0; i < number; i++) {
    items.push(randomName())
  }

  return items
}
