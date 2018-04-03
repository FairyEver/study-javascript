const text = 'apcbpccpcdpcepc'

// [abc]中任选一个即可 a 或者 b 或者 c
console.log(text.match(/[abc]pc/g)) // Array(3) ["apc", "bpc", "cpc"]