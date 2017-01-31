const games = ['Halo', 'WoW', 'Dark Souls']

console.log(games.map(game => {
  return game.toUpperCase()
}))

const numArray = [1, 3, 55, 2, 29, 22, 2]

const sortedArray = numArray.sort((a, b) => a > b? 1: -1)

console.log(sortedArray)

//arrow functions use "this" based on where it's defined

function Course() {
  this.name = "Master ES6"
  this.author = "Bri"
  this.description = "This is a book about code"
  this.getSummary = () => this.name + ', by ' + this.author

  this.getDetails = () => {
    window.setTimeout(() => {
      console.log(this.getSummary() + ': ' + this.description)
    }, 1000)
  }
}

const course = new Course()
course.getDetails()
