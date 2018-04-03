var callbacks = []
for (var i = 0; i < 5; i++) {
  callbacks[i] = () => {
    console.log(i)
  }
}

console.log(i) // 5
callbacks[0]() // 5
callbacks[1]() // 5
callbacks[2]() // 5
callbacks[3]() // 5