"use strict";

//Maps

let m = new Map()

let sb = {name: 'brian'}
//The point here is to show that a map can have any JS object as a key, in a Map
//where in an object, a key must be a string
m.set(sb, 'Learning es6')

console.log(m.has(sb))
console.log(m.get(sb))

console.log(sb)

for (var item of m.values()) {
  console.log(item)
}
