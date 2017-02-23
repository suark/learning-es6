// Proxy
/*
Proxy
Params:
  Target: Object or function to wrap with Proxy.
  Handler: Object whose properties are functions which define the behavior of
  the proxy when an operation is performed on it.
*/

let course = new Proxy({}, {
  // Handler callbacks
  get: (target, name, receiver) => {
    console.log('Property', name)
    return name
  },
  set: (target, name, value, receiver) => {
    console.log('Assignment on Property', name)
    return value
  },
})

course.name = 'Brian'
course.publisher = 'Stuff'

console.log(course.name)
console.log(course.publisher)
