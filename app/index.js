// New Array stuff

let result = Array.from(document.querySelectorAll('*'))
console.log(result)

let m = new Map([[1, 2], [2, 4], [4, 8]])

console.log(Array.from(m))
console.log(Array.from("foo"))

let arr = Array.of(1, 2, 3)

console.log(arr)

console.log([0, 0, 0].fill(7, 1))

console.log([1, 2, 3].findIndex(x => x === 2))

console.log([1, 2, 3, 4, 5].copyWithin(3, 1))
