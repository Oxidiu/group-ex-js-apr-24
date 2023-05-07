let dataArr = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}

function getMax(arr) {
  let sorted = arr.sort((a, b) => a - b)
  return sorted[sorted.length - 1]
}

function getMin(arr) {
  let sorted = arr.sort((a, b) => a - b)
  return sorted[0]
}

function getMinMax(arr) {
  let min = getMin(arr);
  let max = getMax(arr);
  return [min, max];
}

let [min, max] = getMinMax(dataArr);

class Pair {
  min;
  max;
  useless;
  constructor(min, max) {
    this.min = min;
    this.max = max;
    this.useless = -10;
  }
}

function addMinMax({ min, max }) {
  return min + max;
}

let obj1 = new Pair(min, max);
console.log(obj1);

let result = addMinMax(obj1);
console.log(result);

let tString = `Our object has min ${min} and max ${max}, with a total of ${result}`;
console.log(tString);

let jsonObj = JSON.stringify(obj1)
let obj = JSON.parse(jsonObj);

console.log(obj);

localStorage.setItem('obj1', jsonObj)