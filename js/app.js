"use strict";

//weakmaps

//a collection of keys and values, but the key must be an object
let weak = new WeakMap()

// weak.set('publisher', 'skillbakery')
// console.log(weak.get('publisher'))
//These get an error because a key must be an object

let course = {name: 'Things', publisher:'skillbakery'}
let company = {name: 'companyname'}

weak.set(course, {price: 59})
weak.set(company, 'SB')

console.log(weak.get(course))
console.log(weak.get(company))

//Other functions
console.log(weak.has(course))
weak.delete(course)
console.log(weak)
//Weakmap's .clear function was removed so it won't work anymore
// weak.clear(company)
// console.log(weak)
//Now if we change the company object
// company = null
// console.log(weak.get(company))
//We can no longer access the associated value

//Weakmap has no size. It is an unorderd collection of objects and values
