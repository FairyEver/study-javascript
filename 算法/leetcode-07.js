const fn = (x = 1) => {
  const max = Math.pow(2, 31)
  const n = Number(Array.from(String(Math.abs(x))).reverse().join(''))
  return n > max ? 0 : (x < 0 ? -n : n)
}

console.log(fn(123))

console.log(fn(-123))