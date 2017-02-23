// New Number Methods
console.log('---Number Truncation---')
console.log(Math.trunc(39.7))
console.log(Math.trunc(0.5))
console.log(Math.trunc(-0.3))

console.log('---Number Type Checking---')
console.log(Number.isNaN(45))
console.log(Number.isNaN(NaN))

console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(-Infinity))
console.log(Number.isFinite(NaN))
console.log(Number.isFinite(156))

console.log('---Sign Determination---')
console.log(Math.sign(10))
console.log(Math.sign(0))
console.log(Math.sign(-0))
console.log(Math.sign(-10))
console.log(Math.sign(NaN))

console.log('---Number Safety Checking---')
console.log(Number.isSafeInteger(42))
console.log(Number.isSafeInteger(90081992547408822))
