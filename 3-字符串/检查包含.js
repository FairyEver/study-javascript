const a = 'Hello world'

console.log(a.startsWith('Hello'))
// true

console.log(a.endsWith('rld'))
// true

let s = 'Hello world!';
console.log(s.startsWith('world', 6))
// true
console.log(s.endsWith('Hello', 5))
// true
console.log(s.includes('Hello', 6))
// false
// 使用第二个参数n时，endsWith的行为与其他两个方法有所不同
// 它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束