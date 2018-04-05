console.log([1, 2, 3, 4, 5, 6, 7, 8].copyWithin(1, 2, 3))
// from index:1 => 2
// start index: 2 & end index: 3 (不包括) => 3
// index 1 => index 2
// [1, 3, 3, 4, 5, 6, 7, 8]

console.log([1, 2, 3, 4, 5, 6, 7, 8].copyWithin(0, 4, 7))
// [5, 6, 7, 4, 5, 6, 7, 8]

console.log([1, 2, 3, 4, 5, 6, 7, 8].copyWithin(-1, 0, 1))
// [1, 2, 3, 4, 5, 6, 7, 1]

console.log([1, 2, 3, 4, 5, 6, 7, 8].copyWithin(0, -2, -1))
// [7, 2, 3, 4, 5, 6, 7, 8]

console.log(Array.from({length: 5, 3: 1}))
// [undefined, undefined, undefined, 1, undefined]
console.log(Array.from([].copyWithin.call({length: 5, 3: 1}, 0, 3, 4)))
// [1, undefined, undefined, 1, undefined]