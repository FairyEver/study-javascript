console.log('[x]'.padStart(10, '123'))
// 1231231[x]

console.log('[x]'.padEnd(10, '123'))
// [x]1231231

console.log('[x]'.padStart(10))
//        [x]

console.log('[x]'.padEnd(10))
// [x]       

console.log('12'.padStart(10, 'YYYY-MM-DD'))
// YYYY-MM-12

console.log('09-12'.padStart(10, 'YYYY-MM-DD'))
// YYYY-09-12