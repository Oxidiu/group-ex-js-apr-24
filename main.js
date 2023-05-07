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

const getMinMax = () => {
  const result = [];
  const min = dataArr.reduce((acc, curr) => acc < curr ? acc : curr, Infinity)
  result.push(min);
  const max = dataArr.reduce((acc, curr) => acc > curr ? acc : curr, 0)
  result.push(max);
  return result;
}

const minMax = getMinMax(dataArr);
const [min, max] = minMax;

class MinMax {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }
}

const minMaxObj = new MinMax(min, max);

const addMinMax = ({min, max}) => {
  return min + max;
}

const minMaxSum = addMinMax(minMaxObj)

const stringfiedObj = JSON.stringify(minMaxObj)
//----------Console Logging-----------
console.log("minMax:");
console.log(minMax);

console.log("Destructured:");
console.log("Min:");
console.log(min);
console.log("Max:");
console.log(max);

console.log("minMaxObj:");
console.log(minMaxObj);

console.log("MinMax Sum:")
console.log(minMaxSum);

console.log(`Our object has min ${minMaxObj.min} and max ${minMaxObj.max}, with a total of ${minMaxSum}`)

console.log("JSON:");
console.log(stringfiedObj);
console.log(`StringfiedObj is of type ${typeof(stringfiedObj)}`)


