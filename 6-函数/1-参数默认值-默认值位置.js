function demo(x = 'x default', y) {
    console.log(x)
    console.log(y)
}

demo()
demo(1)
demo(undefined, 2)
// x default
// undefined
// 1
// undefined
// x default
// 2