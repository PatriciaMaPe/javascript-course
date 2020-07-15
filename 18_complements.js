// Dates
const today = new Date()
const birthday = new Date(1992, 9, 22)


function daysBetweenDates(date1, date2) {
  const oneDayInMilliseconds = 1000 * 60 * 60 * 24 // 1000: 1 sec -> 60: 1 min -> 60: 1 hour -> 24: 1 day
  const diffMilliseconds = Math.abs(date1 - date2)

  return Math.floor(diffMilliseconds / oneDayInMilliseconds)
}


// Recursivity

function factorial(n) {
  if (n === 1) {
    return 1
  }

  return n * factorial(n - 1)
}

// Memoization
function factorial(n) {
  if (!this.cache) {
    this.cache = {}
  }

  if (this.cache[n]) {
    // The factorial have already been computed
    return this.cache[n]
  }

  if (n === 1) {
    return 1
  }

  this.cache[n] = n * factorial(n - 1)
  return this.cache[n]
}

// Closures
function salute(languageWord) {
  return function(name) {
    console.log(`Hola ${name} ${languageWord}`)
  }
}

// Each variable will remember the language word
const argentineSalute = salute('che')
const mexicanSalute = salute('güey')
const colombianSalute = salute('amigo')

argentineSalute('Patri') // Hola Patri che
mexicanSalute('Patri') // Hola Patri güey
colombianSalute('Patri') // Hola Patri amigo

//
const patri = {
  name: 'Patri',
  age: 27
}

const chesti = {
  name: 'Chesti',
  age: 9
}

function salutePerson(salute = 'Hola') {
  console.log(`${salute}, my name is ${this.name}`)
}

const salutePatri = salutePerson.bind(patri, 'Hola che')
const saluteChesti = salutePerson.bind(chesti)

setTimeout(salutePerson.bind(patri), 1000)

salutePerson.call(patri, 'Hola che')
salutePerson.apply(patri, ['Hola che'])