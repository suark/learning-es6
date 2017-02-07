//destructured assignment


function getDate() {
  return [15, 7, 2015]
}

let [date, month] = getDate()
let [,,year] = getDate()

console.log(date, month)
console.log(year)
