var helloWorld = function(name, greeting) {
  return name + ' ' + greeting;
}

console.log(helloWorld('Hello', 'World!'));

const newGreeting1 = (name, greeting) => {
  return name + ' ' + greeting;
}

console.log(newGreeting1('Sup', 'Planet'));

const newGreeting2 = (name, greeting) => name + ' ' + greeting;

console.log(newGreeting2('Yo', 'Earth'));
