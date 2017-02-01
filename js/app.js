//destructured assignment

var [d, m, y] = [15, 7, 2015]

[m, y] = [y, m]

console.log(m, y)

var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

// let [a, b, c] = [1, 2, 3]
// console.log(a, b, c)
//
// [b, c] = [c, b]
// console.log(a, b, c)
