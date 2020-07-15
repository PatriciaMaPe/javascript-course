var patri = {
  name: 'Patri',
  age: 28
}

// Give the entire object
function printUppercaseName(person) {
  var name = person.name.toUpperCase()
  // the same is: var {name} = person
  console.log(name)
}

// Give an attribute of the object
function printUppercaseName2({
  name
}) {
  console.log(name.toUpperCase())
}

function printNameAndAge(person) {
  console.log(`Hi, I'm ${person.name} and I'm ${person.age} old`)
}

printUppercaseName(patri)

printUppercaseName2(patri)
printUppercaseName2({
  name: 'Chesti'
})
printNameAndAge(patri)