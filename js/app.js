//destructured parameters

function logMessage(msg, {name:courseName, publisher:publisherName}) {
  console.log(msg, courseName, publisherName)
}

logMessage('I like turtles', {name: 'Dude', publisher: "Sweet Prod."})
