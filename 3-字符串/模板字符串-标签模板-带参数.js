const a = 1
const b = 2

function demo(strArr, ...arr) {
    console.log(strArr)
    console.log(arr)
}

demo`my ${a}nam${a + b}e is${b} liyang`

// Array(4) ["my ", "nam", "e is", " liyang"]
// Array(3) [1, 3, 2]