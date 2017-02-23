// Object Property

let destination = {start: 0}
let source_mid = {interval: 10, duration: 20}
let source_end = {distance: 40}

// Assign properties from one object into another. It makes a copy, not reference
Object.assign(destination, source_mid, source_end)
source_mid.interval = 30
console.log(destination)
