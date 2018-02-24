const text = '123hjkg1h3gh123jk21h3jk13123'

console.log(text.match(/[0-9]+/g)) // Array(7) ["123", "1", "3", "123", "21", "3", "13123"]

console.log(text.match(/[0-2]+/g)) // Array(6) ["12", "1", "12", "21", "1", "12"]