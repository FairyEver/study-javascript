// Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
// Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组
// 而 Array(7) 创建一个包含 7 个 undefined 元素的数组

console.log(Array.of(5)) // [5]
console.log(Array(5)) // Array(5) []