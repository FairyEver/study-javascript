// 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

var a = 'Hello'

if (true) {
    // console.log(a) // ReferenceError: a is not defined
    let a = 'World'
}

// ES6 明确规定，如果区块中存在let和const命令
// 这个区块对这些命令声明的变量从一开始就形成了封闭作用域
// 凡是在声明之前就使用这些变量，就会报错。

if (true) {
    // typeof x // ReferenceError: x is not defined
    let x = 1
}