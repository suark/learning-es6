const games = ['Halo', 'WoW', 'Dark Souls']

console.log(games.map(game => {
  return game.toUpperCase()
}))

const numArray = [1, 3, 55, 2, 29, 22, 2]

const sortedArray = numArray.sort((a, b) => a < b? 1: -1)

console.log(sortedArray)
