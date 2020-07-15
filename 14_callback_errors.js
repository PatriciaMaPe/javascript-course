const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = {
  crossDomain: true
}

function obtainPerson(id, callback) {
  const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(URL, opts, callback).fail(function() {
    console.log(`Error getting person ${id}`);
  })

}
obtainPerson(1, function(person) {
  console.log(`Hi! I am ${person.name}`)
  obtainPerson(2, function(person) {
    console.log(`Hi! I am ${person.name}`)
    obtainPerson(3, function(person) {
      console.log(`Hi! I am ${person.name}`)
      obtainPerson(4, function() {
        console.log(`Hi! I am ${person.name}`)
        obtainPerson(5, function() {
          console.log(`Hi! I am ${person.name}`)
        })
      })
    })
  })
})

// Luke
// C-3PO
// R2-D2