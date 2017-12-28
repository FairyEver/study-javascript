const map = new Map()

map.set('first', 1)
map.set('second', 2)

for (const [key, value] of map) {
    console.log(key)
    console.log(value)
}