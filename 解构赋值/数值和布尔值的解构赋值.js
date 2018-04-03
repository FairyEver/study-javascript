const {
    toString: a
} = 123

console.log(a === Number.prototype.toString) // true
console.log(typeof a) // function