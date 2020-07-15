const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = {
  crossDomain: true
}

function obtainPerson(id) {
  return new Promise((resolve, reject) => {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $
      .get(URL, opts, function(data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Error getting person ${id}`)
}

//Just get one person
obtainPerson(1)
  .then(function(person) {
    console.log(`Hi! I am ${person.name}`)
  })
  .catch(onError)

/*
  Promises in serie
*/

// Multiple pomises for getting all people
obtainPerson(1)
  .then(function(person) {
    console.log(`Hi! I am ${person.name} #1`)
    return obtainPerson(2)
  }).then(function(person) {
    console.log(`Hi! I am ${person.name} #2`)
    return obtainPerson(3)
  }).then(function(person) {
    console.log(`Hi! I am ${person.name} #3`)
    return obtainPerson(4)
  }).then(function(person) {
    console.log(`Hi! I am ${person.name} #4`)
    return obtainPerson(5)
  }).then(function(person) {
    console.log(`Hi! I am ${person.name} #5`)
  })
  .catch(onError)


/*
  Promises in parallel
*/

var ids = [1, 2, 3, 4, 5]
var promises = ids.map(function(id) {
  return obtainPerson(id)
})

Promise
  .all(promises)
  .then(people => console.log(people))
  .catch(onError)