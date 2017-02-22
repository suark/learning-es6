"use strict";

//classes
//convention to use capital to show it is a class
class Shape {
  constructor(l, b) {
    this.l = l
    this.b = b
  }

  render() {
    console.log("rendering shape")
  }
}

//and you have inheritance
class Circle extends Shape {
  constructor(l, b, radius) {
    super(l, b)
    this.radius = radius
  }

  //a static function can be used without making an instance of the class
  //which is why it works when used in get area
  //"it's a property not a function"
  static get pi() {
    return 3.14
  }
  //get is what makes it a property instead of a function
  get area() {
    return Circle.pi * this.radius * this.radius
  }

  render() {
    console.log("rendering circle")
  }
}

var circ = new Circle(0, 0, 20)
console.log('circ\'s l:', circ.l)
circ.l = 40
console.log('circ\'s l:', circ.l)

console.log('circ\'s b:', circ.b)
console.log('circ\'s radius:', circ.radius)

console.log('Pi:', Circle.pi)
console.log('Area of Circle:', circ.area)

circ.render()
