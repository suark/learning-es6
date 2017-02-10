//generators
/*
A special kind of function that returns an iterator

They stop execution after each "yield" until next is called again
*/

//the * makes it a generator function
function* logMessages() {
  yield 'sup homies'
  yield 'sup bromies'
  yield 'sup yomies'
}

let msg = logMessages()

for (let word of msg) {
  console.log(word)
}
