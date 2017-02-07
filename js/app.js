//destructured assignment


function getDate() {
  return {
    d: 15,
    m: 7,
    y: 2015
  }
}

let {
  m: month,
  y: year
} = getDate()

console.log(month, year)
