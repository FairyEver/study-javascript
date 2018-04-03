const text = '123hjkg1h3gh123jk21h3jk13123'

console.log(text.match(/[^0-9]+/g)) // Array(6) ["hjkg", "h", "gh", "jk", "h", "jk"]

console.log(text.match(/[^0-2]+/g)) // Array(6) ["3hjkg", "h3gh", "3jk", "h3jk", "3", "3"]