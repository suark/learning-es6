"use strict";
//iterators

let words = ['skills', 'bakery', 'studio']
console.log('words:', words)

console.log('-------entries')
for (let word of words.entries()) {
  console.log(word)
}

console.log('-------values')
for (let word of words.values()) {
  console.log(word)
}

console.log('-------keys')
for (let word of words.keys()) {
  console.log(word)
}
