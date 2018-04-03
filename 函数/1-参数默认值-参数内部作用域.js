// 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）
// 等到初始化结束，这个作用域就会消失
// 这种语法行为，在不设置参数默认值时，是不会出现的


const a = 10

function demo(a, n = a + 10) {
    // 给n赋值的时候使用的a是参数a 并不是外部的a
    console.log(a)
    console.log(n)
}

demo()
// undefined
// NaN

demo(30)
// 30
// 40