let arr = []

for (let i = 0; i < 30; i++) {
    arr.push('o'.repeat(i).padStart(30, ' '))
    console.log(arr[i])
}