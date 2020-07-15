var name = 'Patri' // global variable

// Use the global variable 'name'
function printUppercaseName() {
  name = name.toUpperCase()
  console.log(name)
}

// Use local variable 'n'
function printUppercaseName(n) {
  n = n.toUpperCase()
  console.log(n)
}

// Use local variable 'name'
function printUppercaseName(name) {
  name = name.toUpperCase()
  console.log(name)
}

printUppercaseName(name)