"use strict";

//Sets

let s = new Set([10,20,30])

console.log(s.has(40))

s.add(40)

console.log(s)

s.add(20)

console.log(s)

s.delete(30)

console.log(s)
