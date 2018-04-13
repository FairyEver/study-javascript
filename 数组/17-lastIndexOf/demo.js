// lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1
// 从数组的后面向前查找，从 fromIndex 处开始。

console.log([1, 2, 3, 4, 5, 6].lastIndexOf(6)) // 5

var array = [2, 5, 9, 12];
var index = array.lastIndexOf(2);
console.log(index) // 0