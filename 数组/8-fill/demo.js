// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。

console.log([0, 1, 2].fill(3)) // [3, 3, 3]

console.log([0, 1, 2, 3, 4, 5, 6].fill(3, 2)) // [0, 1, 3, 3, 3, 3, 3]

console.log([].fill.call({length: 3}, 4)) // {0: 4, 1: 4, 2: 4, length: 3}

console.log(Array(3).fill(1)) // [1, 1, 1]