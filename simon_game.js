const btnStart = document.getElementById('btnStart')
const celeste = document.getElementById('celeste')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const FINAL_LEVEL = 10


class Game {
  constructor() {
    //this.start = this.start.bind(this)
    this.start()
    this.generateSequence()
    setTimeout(this.nextLevel, 500)
  }

  start() {
    this.nextLevel = this.nextLevel.bind(this) // behaviour of this never change, alway refer to Game
    this.chooseColor = this.chooseColor.bind(this)
    this.toggleBtnStart()
    this.level = 1
    this.colors = {
      celeste, // celeste: celeste (same name -> celeste)
      violet,
      orange,
      green
    }
  }

  toggleBtnStart() {
    if (btnStart.classList.contains('hide')) {
      btnStart.classList.remove('hide')
    } else {
      btnStart.classList.add('hide')
    }
  }

  generateSequence() {
    this.sequence = new Array(FINAL_LEVEL).fill(0).map(n => Math.floor(Math.random() * 4))
  }

  nextLevel() {
    this.sublevel = 0
    this.startSequence()
    this.addClickEvents()
  }

  getColor(number) {
    switch (number) {
      case 0:
        return 'celeste'
      case 1:
        return 'violet'
      case 2:
        return 'orange'
      case 3:
        return 'green'
    }
  }

  getColorNumber(color) {
    switch (color) {
      case 'celeste':
        return 0
      case 'violet':
        return 1
      case 'orange':
        return 2
      case 'green':
        return 3
    }
  }

  startSequence() {
    for (let i = 0; i < this.level; i++) {
      const color = this.getColor(this.sequence[i])
      setTimeout(() => this.lightUpColor(color), 1000 * i)
    }
  }

  lightUpColor(color) {
    this.colors[color].classList.add('light')
    setTimeout(() => this.turnOffColor(color), 350)
  }

  turnOffColor(color) {
    this.colors[color].classList.remove('light')
  }

  addClickEvents() {
    this.colors.celeste.addEventListener('click', this.chooseColor)
    this.colors.violet.addEventListener('click', this.chooseColor)
    this.colors.orange.addEventListener('click', this.chooseColor)
    this.colors.green.addEventListener('click', this.chooseColor)
  }

  removeClickEvents() {
    this.colors.celeste.removeEventListener('click', this.chooseColor)
    this.colors.violet.removeEventListener('click', this.chooseColor)
    this.colors.orange.removeEventListener('click', this.chooseColor)
    this.colors.green.removeEventListener('click', this.chooseColor)
  }

  chooseColor(ev) {
    const colorName = ev.target.dataset.color
    const colorNumber = this.getColorNumber(colorName)
    this.lightUpColor(colorName)

    if (colorNumber === this.sequence[this.sublevel]) {
      // Match the color
      this.sublevel++
      if (this.sublevel === this.level) {
        this.level++
        this.removeClickEvents()
        if (this.level === (FINAL_LEVEL + 1)) {
          //Win!
          this.winGame()
        } else {
          setTimeout(this.nextLevel, 1000)
        }
      }
    } else {
      //Lost
      this.looseGame()
    }
  }

  winGame() {
    swal('', 'You win!', 'success')
      .then(this.start)
  }

  looseGame() {
    swal('', 'You loose', 'error')
      .then(() => {
        this.removeClickEvents()
        this.start()
      })
  }
}

function startGame() {
  window.game = new Game()
}