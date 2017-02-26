// Reflect
let dynamic = {number: 1}

Reflect.defineProperty(dynamic, 'student', {name: 'john'})

dynamic[Symbol('price')] = 49

console.log(Reflect.ownKeys(dynamic))

let course = new Proxy({}, {
  get: (target, name, value, receiver) => {
    console.log('Get Property', name)
    return Reflect.get(target, name, receiver)
  },
  set: (target, name, value, receiver) => {
    console.log('Assignment on Property', name)
    return Reflect.set(target, name, value, receiver)
  },
})

course.name = 'ES6 - The Next Level'
course.publisher = 'Skillbakery'

console.log(course.name)
console.log(course.publisher)
