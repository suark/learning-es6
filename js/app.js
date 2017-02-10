//rest parameters

function restParameters(firstName, lastName, ...details) {
  console.log(firstName, lastName)
  console.log(details)
  for (contact in details) {
    console.log(details[contact])
  }
}

restParameters('Brian', 'Kraus', 'detail1', 'detail2', 'detail3')
