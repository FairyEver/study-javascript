console.log((function (a) {}).length)
// 1

// length属性的含义是，该函数预期传入的参数个数
// 某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了

console.log((function (...a) {}).length)
// 0

// 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了

function demo(a = 1, b, c) {
    //
}

console.log(demo.length) // 0

function demo2(a, b, c = 1) {
    //
}

console.log(demo2.length) // 2

function demo3(a, b, c = 1, d, e) {
    //
}

console.log(demo3.length) // 2

const a = 123

console.log(a)