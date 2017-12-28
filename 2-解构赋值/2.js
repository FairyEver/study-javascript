function me () {
    console.log('----')
    return 'Hello'
}

const [name = me()] = ['liyang']

console.log(name)

const [name2 = me()] = []

console.log(name2)

// liyang
// ----
// Hello