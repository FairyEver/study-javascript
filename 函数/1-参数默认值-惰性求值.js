let n = 1

function demo(x = n + 1) {
    console.log(x)
}

demo() // 2

n = 2

demo() // 3