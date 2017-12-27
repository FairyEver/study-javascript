function * demo () {
    yield 'Hello'
    yield 'World'
}

let my = demo()

console.log(`${my.next().value} ${my.next().value}`)

// Hello World