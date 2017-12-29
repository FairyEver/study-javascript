// const {
//     key1: a,
//     key2: b
// } = {}

const {
    key1: a,
    key2: b
} = {
    key1: 'a',
    key2: 'b'
}

console.log(a) // a
console.log(b) // b

const {
    key1 = 'a',
    key2 = 'b'
} = {}

console.log(key1)
console.log(key2)
// a
// b