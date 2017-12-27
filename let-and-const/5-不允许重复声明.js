// let a = 1
// let a = 2
// SyntaxError: Identifier 'a' has already been declared

function test() {
    var a = 1
    let a = 2
}
// test() // SyntaxError: Identifier 'a' has already been declared

function demo(name) {
    let name = 1
}

// demo() // SyntaxError: Identifier 'name' has already been declared