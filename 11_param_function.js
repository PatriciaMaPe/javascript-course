// Class Person
class Person {
  constructor(name, age, height) {
    this.name = name
    this.age = age
    this.height = height
  }

  salute(fn) {
    //var name = this.name
    //var age = this.age
    // Same as:
    var {
      name,
      age
    } = this

    console.log(`Hello, my name is ${name} and I am ${age} years old`);
    if (fn) {
      fn(name, false)
    }
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

  salute(fn) {
    console.log(`Hello, my name is ${this.name} and I am a developer`)
    if (fn) {
      fn(this.name, true)
    }
  }
}


function answerSalute(name, isDeveloper) {
  console.log(`Hello ${name}!`)
  if (isDeveloper) {
    console.log(`Oh! Thats awesome!`)
  }
}

var patri = new Person('Patri', 27, 1.5)
var luna = new Developer('Luna', 19, 1.85)
patri.salute()
luna.salute(answerSalute)