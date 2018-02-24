const r = /a/

const text = '123Abcdefg'

console.log(text.search(r)) // -1

// 忽略大小写
const r2 = /a/i

console.log(text.search(r2)) // 3
