"use strict";

//Symbols
//new primitive data type
// a symbol is unique and immutable
//can use symbols as identifiers when adding properties to an object

//how to create a symbols
// let key = Symbol('a thing')
// let key2 = Symbol('a thing')
//these are unique even though they look the same

let a = new Map()

{
  let key = Symbol()
  a.set(key, 'SkillBakery')
  //Here we can get and reset a 'value' as a.get(key)
  console.log(a.get(key))
  //this will work
}
//but out here, we are outside of the scope of that block and the key will not work
//console.log(a.get(key))
//But we can check that a still has a size of 1 because the key did work in the block
console.log(a.size)

let courseName = Symbol()

let course = {
  publisher: 'SkillBakery',
  [courseName]: 'ES6'
}

console.log(course)

//a symbol can create a unique key in an object
//symbol properties will not show in a for in loop

let props = []
for (let p in course) {
  console.log(p)
  props.push(p)
}

console.log(props.length)
console.log(props)

//You can't get symbol properties even if you convert object to json
// but you can use this new function

console.log(Object.getOwnPropertySymbols(course)[0])
//You can get the value of the symbol key variable by getting the
//keysymbol then using it to index the object that uses that key symbol
let keySymbol = Object.getOwnPropertySymbols(course)[0]
console.log(course[keySymbol])
