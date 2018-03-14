const list = [
    {a: 1, b: 2, c: 3, d: 'Hello'},
    {a: 1, b: 2, c: 3, d: 'Hello'},
    {a: 1, b: 2, c: 3, d: 'Hello'},
    {a: 1, b: 2, c: 3, d: 'Hello'},
    {a: 1, b: 2, c: 3, d: 'Hello'}
]
const list2 = [
    {a: 1, b: 2, c: 3, d: 'Hello'},
    {a: 1, b: 2, c: 3, d: 'Hello'},
    {a: 1, b: 2, c: 3, d: 'Hello2'},
    {a: 1, b: 2, c: 3, d: 'Hello'},
    {a: 1, b: 2, c: 3, d: 'Hello'}
]

console.log(list[0].d.repeat(list.length) === list.map(e => e.d).join('')) // true
console.log(list2[0].d.repeat(list2.length) === list2.map(e => e.d).join('')) // false