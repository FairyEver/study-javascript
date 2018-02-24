const mailAddress = '--1711467488@qq.com2'

const r = /\w+@[a-z0-9]+\.[a-z]+/i

console.log(r.test(mailAddress)) // true

// test 特性 只要字符串一部分符合要求 就会返回true

// ^ 不出现在 [] 中 表示行首

// $ 表示尾

const r2 = /^\w+@[a-z0-9]+\.[a-z]+$/i

console.log(r2.test(mailAddress)) // false