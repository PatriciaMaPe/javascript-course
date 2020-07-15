// Class Person
class Person {
  constructor(name, age, height) {
    this.name = name
    this.age = age
    this.height = height
  }

  salute() {
    console.log(`Hello, my name is ${this.name}`);
  }

  isTall() {
    return this.height > 1.8
  }
}

// Class Developer
class Developer extends Person {
  constructor(name, age, height) {
    super(name, age, height)
  }

  salute() {
    console.log(`Hello, my name is ${this.name} and I am a developer`)
  }
}

var patri = new Person('Patri', 27, 1.5)
var luna = new Developer('Luna', 19, 1.85)
patri.salute()
luna.salute()