"use strict"

function blockBindingDemo() {
  let roll_num = 123
  if (true) {
    let roll_num = 456
    console.log(roll_num)
  }
  console.log(roll_num)
}

blockBindingDemo()
