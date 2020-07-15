// Prototypes (classes)

// Person prototype contructor
function Person(name, age, height) {
  // this -> reference to the object
  this.name = name
  this.age = age
  this.height = height
  //next instruction is implicit, return the created object
  //return this
}

// Person prototype function
Person.prototype.salute = function() {
  console.log(`Hello, my name is ${this.name}`);
}

Person.prototype.isTall = function() {
  return this.height > 1.8
}

// Arrow functions dont work because 'this' reference to 'window'
Person.prototype.isTallArrowFunction = () => this.height > 1.8

var patri = new Person('Patri', 27, 1.5)
var luna = new Person('Luna', 19, 1.85)
patri.salute()

luna.isTall() // true
luna.isTallArrowFunction() // false (arrow functions dont work)