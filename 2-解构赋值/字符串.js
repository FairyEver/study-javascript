const [a, b, c, d, e] = 'Hello'

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

// 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。

const {length: len} = 'Hello'

console.log(len) // 5