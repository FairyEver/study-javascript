// 转义

const text = 'ahsdu 23 123 1 2312io3'

// 把数字提取出来
console.log(text.match(/\d/)) // Array(1) ["2"]

// 全部匹配
console.log(text.match(/\d/g)) // Array(11) ["2", "3", "1", "2", "3", "1", "2", "3", …]

// + 表示若干
console.log(text.match(/\d+/g)) // Array(5) ["23", "123", "1", "2312", "3"]