// 下面的例子输出"one", "two", "four"
// 当到达包含值"two"的项时，整个数组的第一个项被移除了，这导致所有剩下的项上移一个位置
// 因为元素 "four"现在在数组更前的位置，"three"会被跳过
// forEach()不会在迭代之前创建数组的副本

var words = ["one", "two", "three", "four"];
words.forEach(function(word) {
  console.log(word);
  if (word === "two") {
    words.shift();
  }
})

// one
// two
// four
