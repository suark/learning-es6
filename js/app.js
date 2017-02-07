//destructured assignment


function getDate() {
  return {
    d: 15,
    m: 7,
    y: 2015
  }
}

let {m, y} = getDate()

console.log(m, y)
