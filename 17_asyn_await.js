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

async function obatinPeople() {
  var ids = [1, 2, 3, 4, 5]
  var promises = ids.map(function(id) {
    return obtainPerson(id)
  })

  try {
    var people = await Promise.all(promises) //The execution of the program stop until the promises are obatained
    console.log(people)
  } catch (id) {
    onError(id)
  }
}

obatinPeople()