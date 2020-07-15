var patri = {
  name: 'Patri',
  age: 26,
  engineer: true,
  chef: true,
  mechanic: false
}

function printProfessions(person) {
  console.log(`${person.name} is:`)
  if (person.engineer) { // if(persona.engineer == true)
    console.log('Engineer')
  } else {
    console.log('Not engineer')
  }

  if (person.chef) {
    console.log('Chef')
  }

  if (person.mechanic) {
    console.log('Mechanic')
  }
}

printProfessions(patri)

const FULL_AGE = 18

function isFullAge(person) {
  return person.age >= FULL_AGE
}

// Anonimous function
const isFullAgeAnonimousFunction = function(person) { // use const rather than var
  return person.age >= FULL_AGE
}

// Arrow function
const isFullAgeArrowFunction = (person) => { // use const rather than var
  return person.age >= FULL_AGE
}

// Arrow function with only one parameter and returning just one thing
const isFullAgeArrowFunction2 = person => person.age >= FULL_AGE

function printIfFullAge(person) {
  if (isFullAgeArrowFunction2(person)) {
    console.log(`${person.name} is full age`)
  } else {
    console.log(`${person.name} isn't full age`)
  }
}