// const {
//     key1: a,
//     key2: b
// } = {}

const {
    key1: a,
    key2: b
} = {
    key1: 'a',
    key2: 'b'
}

// console.log(a) // a
// console.log(b) // b

const {
    key1 = 'a',
    key2 = 'b'
} = {}

// console.log(key1)
// console.log(key2)
// a
// b

function demo({ name, value } = { name: 'demo', value: 'demo default value'}) {
    console.log(name)
    console.log(value)
}
function demo2({ name = 'demo2', value = 'demo2 default value' } = {}) {
    console.log(name)
    console.log(value)
}

demo({ name: 'me', value: 'hello' })
demo2({ name: 'me', value: 'hello' })
// me
// hello
// me
// hello

demo()
demo2()
// demo
// demo default value
// demo2
// demo2 default value

demo({ name: 'liyang' })
demo2({ name: 'liyang' })
// liyang
// undefined
// liyang
// demo2 default value

demo({ age: 24 })
demo2({ age: 24 })
// undefined
// undefined
// demo2
// demo2 default value
