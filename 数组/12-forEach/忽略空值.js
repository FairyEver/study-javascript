const log = (element, index, array) => {
  console.log("a[" + index + "] = " + element);
}

[2, 5, ,9].forEach(log);

// a[0] = 2
// a[1] = 5
// a[3] = 9


[2, 5, '', 9].forEach(log);

// a[0] = 2
// a[1] = 5
// a[2] = 
// a[3] = 9

[2, 5, undefined, 9].forEach(log);

// a[0] = 2
// a[1] = 5
// a[2] = undefined
// a[3] = 9

let a

[2, 5, a, 9].forEach(log);

// a[0] = 2
// a[1] = 5
// a[2] = undefined
// a[3] = 9
