// 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）
// 等到初始化结束，这个作用域就会消失
// 这种语法行为，在不设置参数默认值时，是不会出现的

const a = 'outer a'

function demo(name = () => a) {
    console.log(name())
}

demo()
// outer a

const a2 = 'outer a2'

function demo2(name2 = () => {
    let a2 = 'inner a'
    return a2
}) {
    console.log(name2())
}

demo2()
// inner a