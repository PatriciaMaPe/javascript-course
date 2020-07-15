var patri = {
  name: 'Patri',
  age: 28
}

// The objects are given as a reference -> if the objects is modify into the function,
// the object is also modified
// The function modify the object
function birthdayObject(person) {
  person.age += 1
}

// The function not modify the object
function birthdayAttribute(age) {
  age += 1
}

// The function create a new object to modify it, not the original
function birthdayObjectWithoutModifyIt(person) {
  return { ...person, // Copy all attributes of the person object
    age: person.age + 1
  }
}