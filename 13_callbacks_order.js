const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = {
  crossDomain: true
}

function obtainPerson(id, callback) {
  const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(URL, opts, function(person) {
    console.log(`Hi! I am ${person.name}`)

    if (callback) {
      callback()
    }
  })
}

//obtainPerson(1, obtainPerson(2)) // This execute obtainPerson(2) inmediately
obtainPerson(1, function() { // must be called within a function to not be execute inmediately
  obtainPerson(2, function() {
    obtainPerson(3)
  })
})

// Luke
// C-3PO
// R2-D2