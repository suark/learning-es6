//generators
/*
A special kind of function that returns an iterator

They stop execution after each "yield" until next is called again
*/

//the * makes it a generator function
function* logMessages() {
  console.log('learning es6')
  yield 'sup homies'
}

let msg = logMessages()
console.log('msg', msg)

let output = msg.next()
console.log('output', output)

let result = msg.next()
console.log('result', result)
