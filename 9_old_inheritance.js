function inheritance(subPrototype, superPrototype) {
  var fn = function() {} // dummy function
  fn.prototype = superPrototype.prototype
  subPrototype.prototype = new fn
  subPrototype.prototype.constructor = subPrototype
}

// Person prototype contructor
function Person(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
}

// Person prototype function
Person.prototype.salute = function() {
  console.log(`Hello, my name is ${this.name}`);
}

Person.prototype.isTall = function() {
  return this.height > 1.8
}

// Developer prototype
function Developer(name, age) {
  this.name = name
  this.age = age
}

inheritance(Developer, Person)

Developer.prototype.salute = function() {
  console.log(`Hello, my name is ${this.name} and I am a developer`)
}

var patri = new Person('Patri', 27, 1.5)
var luna = new Developer('Luna', 19, 1.85)
patri.salute()
luna.salute()