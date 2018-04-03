var callbacks = []
// let有块作用域

for (let i = 0; i < 5; i++) {
  callbacks[i] = () => {
    console.log(i)
  }
}

// console.log(i) // i is not defined
callbacks[0]() // 0
callbacks[1]() // 1
callbacks[2]() // 2
callbacks[3]() // 3