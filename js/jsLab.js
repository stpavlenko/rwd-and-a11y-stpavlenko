// Задача 1

function countSandwiches(food) {
  return Math.floor(Math.min(food.bread / 2, food.cheese / 1));
}

console.log("Задача 1\n", countSandwiches({ bread: 5, cheese: 6 }));

// Задача 2

console.log("Задача 2");

function generateMultiplicationTable(n) {
  for (let row = 1; row <= n; row++) {
    let curStr = `${row} `;
    for (let col = 1; col <= n; col++) {
      curStr += `${row * col} `;
    }
    console.log(curStr);
  }
}
generateMultiplicationTable(5);

// Задача 3

console.log("Задача 3");

function showQuote(arr, sym) {
  const maxWord = arr.reduce((max, cur) => {
    return max.length > cur.length ? max : cur;
  });
  console.log(sym.repeat(maxWord.length + 4));
  arr.forEach((word) => {
    console.log(
      `${sym} ${word} ${" ".repeat(maxWord.length - word.length)}${sym}`
    );
  });
  console.log(sym.repeat(maxWord.length + 4));
}

showQuote(["Hello", "World", "In", "JS"], "*");

// Задача 4

console.log("Задача 4");

function combineArrays(arr1, arr2) {
  let result = [];
  for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    result.push(arr1[i], arr2[i]);
  }
  if (arr1.length > arr2.length) {
    result.push(...arr1.slice(arr2.length, arr1.length));
  } else {
    result.push(...arr2.slice(arr1.length, arr2.length));
  }
  return result;
}

console.log(combineArrays([1, 2, 3], ["a", "b", "c", "d"]));

// Задача 5

console.log("Задача 5");

function countUniqueValues(arr) {
  let res = {};
  arr.forEach((element) => {
    if (res.hasOwnProperty(element)) {
      res[element] += 1;
    } else {
      res[element] = 1;
    }
  });
  return res;
}

console.log(countUniqueValues([1, 2, 1, 2, 3, 4, 2, 5, "asdfs"]));
