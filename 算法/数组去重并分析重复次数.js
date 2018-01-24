const arr = [2, 3, 5, 2, 5, 5, 7]
let lengthRecorder = {}
arr.forEach(e => {
    let temp = lengthRecorder[String(e)]
    lengthRecorder[String(e)] = temp ? temp + 1 : 1
})
const res = Object.keys(lengthRecorder).filter(e => lengthRecorder[e] % 2 !== 0).map(e => Number(e))
console.log(res)

// Array(3) [3, 5, 7]

