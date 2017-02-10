"use strict";
//destructuring objects

let course = {
  name: 'Dutch Ovens For Life',
  publisher: 'WootWoot'
}

function courseDetails(c) {
  let {name, publisher, ?price} = c
  console.log(name, publisher)
}

courseDetails(course)
