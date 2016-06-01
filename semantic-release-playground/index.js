var familyMembers = require('./family-members.json')
var uniqueRandomArray = require('unique-random-array')

module.exports = {
  all: familyMembers,
  random: uniqueRandomArray(familyMembers)
}
