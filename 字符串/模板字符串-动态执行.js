const str = `console.log('Hello World')`

const demo = new Function(str)

demo()
// Hello World