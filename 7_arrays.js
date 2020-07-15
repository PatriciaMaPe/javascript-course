var sacha = {
  name: 'Sacha',
  lastName: 'Lifszyc',
  height: 1.72,
  readedBooks: 100
}

var alan = {
  name: 'Alan',
  lastName: 'Perez',
  height: 1.86,
  readedBooks: 100
}

var martin = {
  name: 'Martin',
  lastName: 'Gomez',
  height: 1.85,
  readedBooks: 100
}

var dario = {
  name: 'Dario',
  lastName: 'Juarez',
  height: 1.71,
  readedBooks: 100
}

var vicky = {
  name: 'Vicky',
  lastName: 'Zapata',
  height: 1.56,
  readedBooks: 50
}

var paula = {
  name: 'Paula',
  lastName: 'Barros',
  height: 1.76,
  readedBooks: 50
}

// Array: can hold different types of data
var people = [sacha, alan, martin, dario, vicky, paula]

console.log(people[0]); // sacha object
console.log(people[0].height); // 1.72
console.log(people[0]['height']); // 1.72

// FILTER an array
const isTall = person => person.height > 1.8

var tallPeople = people.filter(isTall)

console.log(tallPeople);

// MAP an array
const convertMetersToCentimeters = person => {
  //person.height *= 100
  return { // create new object to not modify the original object
    ...person,
    height: person.height * 100
  }
}
// return object without keyword 'return'
const convertMetersToCentimeters2 = person => ({ // return the object directly
  ...person,
  height: person.height * 100
})

var cmsHeightPeople = people.map(convertMetersToCentimeters2)

console.log(cmsHeightPeople);

// REDUCE an array
const reducer = (count, person) => {
  return count + person.readedBooks
}

var readedBooksTotal = people.reduce(reducer, 0) // params: the function and the counter

console.log(readedBooksTotal)