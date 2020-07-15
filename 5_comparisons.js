// Primitive types
// Boolean
// Null
// Undefined
// Number
// String

// Comparison operators
// !==
// !=
// >, >=
// <, <=

// Compare primitive variables
var x = 4
var y = '4'

console.log(x == y) // true, == change the type of the variables to be the same, and then compare each other
console.log(x == y); // false, compare the value of the variables and the types

// Compare objects
var patri = {
  name: 'Patri'
}

var otherPerson = {
  name: 'Patri'
}

console.log(patri == otherPerson) // false
console.log(patri === otherPerson) // false
// == or === with objects -> compare the reference of the variable

var anotherPerson = patri

console.log(patri == anotherPerson); // true
console.log(patri === anotherPerson); // true

anotherPerson.name = 'Chesti'
console.log(patri.name); // 'Chesti'

var anotherPerson2 = {
  ...patri
}

console.log(patri == anotherPerson2) // false
console.log(patri === anotherPerson2) // false