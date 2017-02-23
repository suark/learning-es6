// Proxy Using Receiver Param
/*
Proxy
Params:
  Target: Object or function to wrap with Proxy.
  Handler: Object whose properties are functions which define the behavior of
  the proxy when an operation is performed on it.
*/

let o = {
  get property () {
    return map.get(this)
  },
  method: function () {
    return map.get(this)
  },
}

let map = new WeakMap()
map.set(o, 'Hello')

console.log(o.property)
console.log(o.method())

var p = Object.create(o)
map.set(p, 'ES6 Stuff')
console.log(p.property)
console.log(p.method())

let handler = {
  target: o,
  get: function (receiver, name) {
    return this.target[name]
  },
}

let q = new Proxy({}, handler)

map.set(q, 'Receiver')
console.log(q.property)
console.log(q.method())

let handler2 = {
  target: o,
  get: function (receiver, name) {
    let d = Object.getOwnPropertyDescriptor(this.target, name)
    if (d.value) {
      return d.value
    } else {
      return d.get.call(receiver)
    }
  },
}

let r = new Proxy({}, handler)

map.set(r, 'Example')
console.log(r.property)
console.log(r.method())
