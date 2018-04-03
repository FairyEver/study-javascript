// const [a, b, c] = [1, 2, 3]

// console.log(a)
// console.log(b)
// console.log(c)

// const [,,c] = [1, 2, 3]
// console.log(c) // 3

const [a, ...b] = [1, 2, 3]

console.log(a) // 1
console.log(b) // 2, 3