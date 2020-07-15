// A callback is a function that is given to another function as an argument.
// This function is then invoked within the external function to complete some action.

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = {
  crossDomain: true
}
const onPeopleResponse = function(person) {
  //console.log(arguments) // params function
  console.log(`Hi! I am ${person.name}`)
}



function obtainPerson(id) {
  const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  // Request in jQuery -> $.get
  // A callback function is executed if the request succeds
  $.get(URL, opts, onPeopleResponse)
}

// The functions are initialize in an specific order, but the answer dont execute in that order
obtainPerson(1) // Luke
obtainPerson(2) // C-3PO
obtainPerson(3) // R2-D2

// R2-D2
// Luke
// C-3PO