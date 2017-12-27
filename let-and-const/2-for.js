for (let i = 0; i < 10; i++) {
    //
}

// console.log(i);
// ReferenceError: i is not defined

for (var i = 0; i < 10; i++) {
    //
}

console.log(i);
// 10

// 设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域

for (let a = 0; a < 3; a++) {
    let a = 'Hello'
    console.log(a)
}

// 输出三次 hello

