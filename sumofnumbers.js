const testArr = [1, 2, 3];

function sumFor(num) {
  let sum = 0;
  for (const i of num) {
    sum += i;
  }
  return sum;
}
console.log(sumFor(testArr));

const sumWhile = (num) => {
  let sum = 0;
  let i = 0;
  while (i < num.length) {
    sum += num[i];
    i++;
  }
  return sum;
};

console.log(sumWhile(testArr));

function sumRecursion(num) {
  if (num.length === 0) {
    return 0;
  }
  return num[0] + sumRecursion(num.slice(1, num.length));
}

console.log(sumRecursion(testArr));

function sumTheSimpleWay(num) {
  return _.reduce(num, function (memo, entry) { return memo + entry; }, 0);
}

console.log(sumTheSimpleWay(testArr));
